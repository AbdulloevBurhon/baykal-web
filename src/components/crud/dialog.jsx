function Dialog({ open, onClose, onSubmit }) {
  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    onSubmit({
      name: form.name.value,
      desc: form.desc.value,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-sm bg-white rounded-xl p-4"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold mb-3">Add user</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            name="name"
            placeholder="Name"
            className="border px-3 py-2 rounded"
          />

          <textarea
            name="desc"
            placeholder="Description"
            className="border px-3 py-2 rounded"
          />

          <div className="flex justify-end gap-3">
            <button type="button" onClick={onClose}>
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Dialog;
