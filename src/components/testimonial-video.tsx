import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";

export function TestimonialVideo({ name, id }: { name: string; id: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <article>
      <div className="sales-video-frame">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&playsinline=1&autoplay=1`}
            title={`Depoimento de ${name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="sales-video-preview"
            style={{
              backgroundImage: `linear-gradient(0deg, #071a30e6, #071a304d), url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)`,
            }}
            onClick={() => setPlaying(true)}
            aria-label={`Reproduzir depoimento de ${name}`}
          >
            <span className="sales-video-play">
              <Play aria-hidden="true" />
            </span>
            <span className="sales-video-preview-name">{name}</span>
            <span className="sales-video-preview-action">Assistir ao depoimento</span>
          </button>
        )}
      </div>
      <p>
        {name}
        <span>Aluno — depoimento em vídeo</span>
      </p>
      <a
        className="sales-video-external"
        href={`https://www.youtube.com/watch?v=${id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Assistir no YouTube <ExternalLink aria-hidden="true" />
      </a>
    </article>
  );
}
