import Image from "next/image";
import { AvatarProps } from "./avatar.types";

export function Avatar({ imageUrl, name, organization }: AvatarProps) {
  return (
    <div className="flex min-w-48 flex-col items-center gap-4">
      <div className="relative h-[120px] w-[120px] rounded-full bg-gray-300 drop-shadow-lg">
        <Image
          src={imageUrl}
          alt="Avatar"
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex w-48 flex-col items-center justify-center gap-1 text-center text-zinc-800">
        <p className="text-lg font-bold">{name}</p>
        <p className="text-base text-wrap">{organization}</p>
      </div>
    </div>
  );
}
