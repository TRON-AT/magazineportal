'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AdminPdfForm from '@/components/admin/AdminPdfForm'
import { BookOpen, LogOut, Plus, Edit, Trash2, Eye, FileText } from 'lucide-react'

interface Pdf {
  _id: string
  title: string
  description: string
  pdfUrl: string
  createdAt: string
  updatedAt: string
}

export default function AdminDashboardPage() {
  const [pdfs, setPdfs] = useState<Pdf[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editPdf, setEditPdf] = useState<Pdf | null>(null)
  const [notif, setNotif] = useState('')
  const router = useRouter()

  // Auth check
  useEffect(() => {
    const token = localStorage.getItem('admin_jwt')
    if (!token) {
      router.replace('/admin/login')
    } else {
      fetchPdfs(token)
    }
    // eslint-disable-next-line
  }, [])

  async function fetchPdfs(token: string) {
    setLoading(true)
    setError('')
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
      const res = await fetch(`${baseUrl}/api/pdfs`)
      if (!res.ok) throw new Error('Failed to fetch PDFs')
      const data = await res.json()
      setPdfs(data)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  function handleLogout() {
    localStorage.removeItem('admin_jwt')
    router.replace('/admin/login')
  }

  function handleUploadClick() {
    setEditPdf(null)
    setShowForm(true)
  }

  function handleEditClick(pdf: Pdf) {
    setEditPdf(pdf)
    setShowForm(true)
  }

  async function handleDelete(pdf: Pdf) {
    if (!window.confirm('Are you sure you want to delete this PDF?')) return
    const token = localStorage.getItem('admin_jwt')
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
      const res = await fetch(`${baseUrl}/api/pdfs/${pdf._id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      })
      if (!res.ok) throw new Error('Delete failed')
      setNotif('PDF deleted successfully!')
      setPdfs((prev) => prev.filter((p) => p._id !== pdf._id))
      setTimeout(() => setNotif(''), 1500)
    } catch (err: any) {
      setNotif(err.message)
      setTimeout(() => setNotif(''), 2000)
    }
  }

  async function handleFormSubmit(data: { title: string; description: string; pdfUrl: string }) {
    const token = localStorage.getItem('admin_jwt')
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    try {
      let res, pdf
      if (editPdf) {
        res = await fetch(`${baseUrl}/api/pdfs/${editPdf._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        })
        if (!res.ok) throw new Error('Update failed')
        pdf = await res.json()
        setPdfs((prev) => prev.map((p) => (p._id === pdf._id ? pdf : p)))
        setNotif('PDF updated successfully!')
      } else {
        res = await fetch(`${baseUrl}/api/pdfs`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        })
        if (!res.ok) throw new Error('Upload failed')
        pdf = await res.json()
        setPdfs((prev) => [pdf, ...prev])
        setNotif('PDF uploaded successfully!')
      }
      setTimeout(() => setNotif(''), 1500)
    } catch (err: any) {
      setNotif(err.message)
      setTimeout(() => setNotif(''), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-orange-100">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center space-x-3">
              <div className="bg-orange-100 p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-600">Manage your magazine PDFs</p>
              </div>
            </div>
            <button 
              onClick={handleLogout} 
              className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Notifications */}
        {notif && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center font-medium">
            {notif}
          </div>
        )}
        
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-center font-medium">
            {error}
          </div>
        )}

        {/* Content */}
        {loading ? (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading PDFs...</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Upload Button */}
            <div className="flex justify-end">
              <button 
                onClick={handleUploadClick} 
                className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Plus className="h-5 w-5" />
                <span>Upload New PDF</span>
              </button>
            </div>

            {/* PDFs Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-100">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gradient-to-r from-orange-50 to-amber-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Title</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Description</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {pdfs.length === 0 ? (
                      <tr>
                        <td colSpan={3} className="px-6 py-12 text-center text-gray-500">
                          <FileText className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                          <p className="text-lg font-medium">No PDFs uploaded yet</p>
                          <p className="text-sm">Start by uploading your first PDF</p>
                        </td>
                      </tr>
                    ) : (
                      pdfs.map((pdf) => (
                        <tr key={pdf._id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="font-medium text-gray-900">{pdf.title}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-600 max-w-md truncate">{pdf.description}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-center space-x-2">
                              <button 
                                onClick={() => handleEditClick(pdf)} 
                                className="flex items-center space-x-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
                              >
                                <Edit className="h-4 w-4" />
                                <span>Edit</span>
                              </button>
                              <button 
                                onClick={() => handleDelete(pdf)} 
                                className="flex items-center space-x-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
                              >
                                <Trash2 className="h-4 w-4" />
                                <span>Delete</span>
                              </button>
                              <a 
                                href={pdf.pdfUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-center space-x-1 bg-orange-100 hover:bg-orange-200 text-orange-700 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 border border-orange-200 hover:border-orange-300"
                              >
                                <Eye className="h-4 w-4" />
                                <span>View</span>
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Modal */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  {editPdf ? 'Edit PDF' : 'Upload New PDF'}
                </h2>
                <button 
                  onClick={() => setShowForm(false)} 
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              <AdminPdfForm
                initial={editPdf ? { title: editPdf.title, description: editPdf.description, pdfUrl: editPdf.pdfUrl } : undefined}
                onSubmit={handleFormSubmit}
                onClose={() => setShowForm(false)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 