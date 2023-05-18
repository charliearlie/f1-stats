"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../common/select";

import { useRouter } from "next/navigation";

type Props = {
  seasons: string[];
  selectedYear?: string;
  type: "qualifying" | "races";
};

export default function YearSelect({ seasons, selectedYear, type }: Props) {
  const router = useRouter();

  const handleYearChange = (value: string) => {
    router.push(`/${type}?year=${value}`);
  };

  return (
    <Select onValueChange={handleYearChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue
          placeholder="Select a season"
          defaultValue={selectedYear}
        />
      </SelectTrigger>
      <SelectContent
        className="max-h-80 dark:bg-slate-700 dark:text-gray-300"
        position="popper"
      >
        <SelectGroup>
          <SelectLabel className="SelectLabel">Seasons</SelectLabel>
          {seasons.reverse().map((season) => (
            <SelectItem key={season} className="cursor-pointer" value={season}>
              {season}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
