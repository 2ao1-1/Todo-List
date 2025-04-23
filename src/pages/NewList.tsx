import EmojiSelector from "../ui/EmojiPicker.tsx";
import { useCreateTodo } from "../hooks/useCreatetodo.tsx";
import { BtnClicked } from "../ui/BtnClicked.tsx";

export default function NewList() {
  const {
    title,
    setTitle,
    selectedIcon,
    setSelectedIcon,
    error,
    isSubmitting,
    handleSubmit,
    handleClose,
  } = useCreateTodo();

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={handleClose}
    >
      <div
        className="bg-card w-full max-w-md rounded-lg shadow-lg p-6 m-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-primary">Create New List</h2>

          <BtnClicked onClick={handleClose} title="Close" icon="✕" />
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center gap-4">
            <div>
              <label className="block text-sm font-medium text-secondary">
                Icon
              </label>
              <div className="text-2xl flex items-center">
                {selectedIcon}
                <EmojiSelector onSelect={setSelectedIcon} />
              </div>
            </div>
            <div className="flex-1">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-secondary mb-1"
              >
                List Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a title for your list"
                className="w-full p-2 rounded border border-secondary/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                autoFocus
                required
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between"></div>
          </div>

          <div className="flex gap-4 justify-end pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 border border-secondary/20 rounded-md hover:bg-main transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!title.trim() || isSubmitting}
              className="bg-accent text-card px-4 py-2 rounded-md hover:bg-accent/80 active:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Creating..." : "Create List"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
