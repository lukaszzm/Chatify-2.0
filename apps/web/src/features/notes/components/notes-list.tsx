import { ErrorAlert } from "@/components/errors/error-alert";
import { NotesItem } from "@/features/notes/components/notes-item";
import { NotesListSkeleton } from "@/features/notes/components/skeletons/notes-list-skeleton";
import { useNotesQuery } from "@/features/notes/hooks/use-notes-query";

export const NotesList = () => {
  const [result] = useNotesQuery();
  const { data, fetching, error } = result;

  if (fetching) {
    return <NotesListSkeleton />;
  }

  if (error) {
    return <ErrorAlert error={error} />;
  }

  const notes = data?.notes;

  return (
    <div className="space-y-2">
      {notes ? notes.map((note) => <NotesItem key={note.id} {...note} />) : null}
    </div>
  );
};
