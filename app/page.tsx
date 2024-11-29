"use client";

import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";
import { NoteData } from "./types/Note";
import NoteList from "./components/note-list/NoteList";
import Sidebar from "./components/sidebar/Sidebar";
import Prueba from "./types/prueba";

export default function Home() {
  const [notes, setNotes] = useState<NoteData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterId, setFilterId] = useState<number>(0);
  const [customMessage, setCustomMessage] = useState("Bienvenido al sistema de notas");

  const updateMessage = (newMessage: string) => {
    setCustomMessage(newMessage);
  };

  useEffect(() => {
    const fetchNotes = async () => {
      setIsLoading(true);
      const query = filterId === 0
        ? supabase.from("notes").select("*").order("created_at", { ascending: false })
        : supabase.from("notes").select("*").eq("category", filterId).order("created_at", { ascending: false });

      const { data } = await query;
      setNotes(data || []);
      setIsLoading(false);
    };
    fetchNotes();
  }, [filterId]);

    function updateNote(updatedNote: NoteData): Promise<void> {
        throw new Error("Function not implemented.");
    }

    function deleteNote(noteId: number): void {
        throw new Error("Function not implemented.");
    }

  return (
    <div className="flex flex-row h-screen">
      <div className="max-w-60 border-r shadow-md bg-white">
        <Sidebar onFilterChange={setFilterId} />
      </div>
      <div className="w-full">
        <div className="flex-1 p-4">
          <Prueba message={customMessage} onButtonClick={updateMessage} />
          {isLoading
            ? skeletonLoader()
            : notes.length === 0 ? (
              <p className="text-xl font-semibold text-slate-500 animate-pulse">
                No hay notas con esta categoría...
              </p>
            ) : (
              <NoteList notes={notes} onUpdateNote={updateNote} onDeleteNote={deleteNote} />
            )}
        </div>
      </div>
    </div>
  );
}

const skeletonLoader = () => (
  <div className="w-full h-screen flex p-4">
    <div className="space-y-2.5 animate-pulse w-full">
      <div className="flex items-center w-full space-x-4">
        <div className="shadow-sm rounded-md h-44 bg-gray-400 w-full"></div>
        <div className="shadow-sm rounded-md h-44 bg-gray-400 w-full"></div>
        <div className="shadow-sm rounded-md h-44 bg-gray-300 w-full"></div>
        <div className="shadow-sm rounded-md h-44 bg-gray-200 w-full"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);
