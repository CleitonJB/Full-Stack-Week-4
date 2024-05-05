"use client";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

const Search = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSeachSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!search) return;

    router.push(`/restaurants?search=${search}`);
  };

  return (
    <form className="flex gap-4" onSubmit={handleSeachSubmit}>
      <Input
        placeholder="Buscar Restaurantes"
        className="border-none"
        onChange={handleChange}
        value={search}
      />

      <Button size="icon" type="submit">
        <SearchIcon size={20} />
      </Button>
    </form>
  );
};

export default Search;
