export default function CreateBtn({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="flex-1 bg-accent text-white py-2 rounded hover:bg-accent disabled:bg-accent"
    >
      {isSubmitting ? "Creating..." : "Create"}
    </button>
  );
}
