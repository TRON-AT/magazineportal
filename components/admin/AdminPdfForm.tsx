'use client'
import { useState } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from '@/lib/firebase'

interface AdminPdfFormProps {
  initial?: { title: string; description: string; pdfUrl?: string }
  onSubmit: (data: { title: string; description: string; pdfUrl: string }) => Promise<void>
  onClose: () => void
}

export default function AdminPdfForm({ initial, onSubmit, onClose }: AdminPdfFormProps) {
  const [title, setTitle] = useState(initial?.title || '')
  const [description, setDescription] = useState(initial?.description || '')
  const [file, setFile] = useState<File | null>(null)
  const [pdfUrl, setPdfUrl] = useState(initial?.pdfUrl || '')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [progress, setProgress] = useState<number | null>(null)

  async function handleFileUpload(file: File) {
    console.log('Direct-to-Firebase upload triggered for file:', file.name);
    const storageRef = ref(storage, `pdfs/${Date.now()}_${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    return new Promise<string>((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(percent);
        },
        (error) => reject(error),
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          setProgress(null);
          resolve(url);
        }
      );
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')
    try {
      let finalPdfUrl = pdfUrl
      if (file) {
        finalPdfUrl = await handleFileUpload(file)
        setPdfUrl(finalPdfUrl)
      }
      await onSubmit({ title, description, pdfUrl: finalPdfUrl })
      setSuccess('Saved successfully!')
      setTimeout(() => {
        setSuccess('')
        onClose()
      }, 1000)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-500 text-sm">{error}</div>}
      {success && <div className="text-green-600 text-sm">{success}</div>}
      {progress !== null && (
        <div className="w-full bg-gray-200 rounded h-2 mb-2">
          <div className="bg-orange-500 h-2 rounded" style={{ width: `${progress}%` }} />
        </div>
      )}
      <div>
        <label className="block text-gray-700 mb-1">Title</label>
        <input
          type="text"
          className="w-full border border-orange-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-1">Description</label>
        <textarea
          className="w-full border border-orange-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-1">PDF File</label>
        <input
          type="file"
          accept="application/pdf"
          className="w-full"
          onChange={e => setFile(e.target.files?.[0] || null)}
        />
        {pdfUrl && (
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="text-orange-600 text-xs mt-1 block">View current PDF</a>
        )}
      </div>
      <div className="flex gap-2 justify-end">
        <button type="button" onClick={onClose} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-700">Cancel</button>
        <button type="submit" disabled={loading} className="px-4 py-2 rounded bg-orange-500 hover:bg-orange-600 text-white font-semibold disabled:opacity-60">
          {loading ? 'Saving...' : 'Save'}
        </button>
      </div>
    </form>
  )
} 