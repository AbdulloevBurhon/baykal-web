import { useState, useEffect } from "react";
import { uploadImage } from "./cloudinary";

function Dialog({ close, onSubmit }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    if (!f) return;

    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Select image");

    try {
      setLoading(true);

      // 🔥 1. загружаем фото
      const imageUrl = await uploadImage(file);

      // 🔥 2. собираем данные формы
      const form = e.target;

      const data = {
        img: imageUrl,
        name: form.name.value,
        desc: form.desc.value,
      };

      // 🔥 3. отправляем наверх
      onSubmit(data);
      close();
    } catch (err) {
      alert("Upload error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-3">
      <div className="bg-white w-full max-w-sm p-4 rounded-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 overflow-hidden">
            {preview ? (
              <img src={preview} className="w-full h-full object-cover" />
            ) : (
              <span className="text-xs text-gray-400">Photo</span>
            )}
          </div>

          <input type="file" accept="image/*" onChange={handleFileChange} />
          <input name="name" placeholder="Full name" />
          <input name="desc" placeholder="Description" />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white py-2 rounded"
          >
            {loading ? "Uploading..." : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Dialog;
