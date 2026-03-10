import Image from "next/image";

export default function AcademyCard({
  image,
  imageAlt,
  title,
  description,
  className = "",
  imagePriority = false,
}) {
  return (
    <article
      className={[
        "w-full max-w-[23rem] space-y-6 text-[var(--gray-dark)]",
        className,
      ].join(" ")}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-tr-[4rem] rounded-bl-[4rem] bg-stone-200">
        <Image
          src={image}
          alt={imageAlt ?? title}
          fill
          priority={imagePriority}
          sizes="(max-width: 640px) 100vw, 23rem"
          className="object-cover"
        />
      </div>

      <div className="space-y-5">
        <h3 className="text-4xl font-semibold leading-tight text-black">
          {title}
        </h3>
        <p className="text-base leading-9 text-[var(--gray-dark)]">
          {description}
        </p>
      </div>
    </article>
  );
}
