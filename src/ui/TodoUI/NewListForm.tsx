import EmojiSelector from "../EmojiPicker";

interface NewListFormProps {
  title: string;
  setTitle: (title: string) => void;
  selectedIcon: string;
  setSelectedIcon: (icon: string) => void;
  isSubmitting: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
}

export function NewListForm({
  title,
  setTitle,
  selectedIcon,
  setSelectedIcon,
  isSubmitting,
  onSubmit,
  onClose,
}: NewListFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="flex items-center gap-4">
        <div>
          <label className="block text-sm font-medium text-secondary">
            Icon
          </label>
          <div className="text-2xl flex items-center">
            <EmojiSelector
              onSelect={setSelectedIcon}
              currentEmoji={selectedIcon}
            />
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

      <div className="flex gap-4 justify-end pt-4">
        <button
          type="button"
          onClick={onClose}
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
  );
}
