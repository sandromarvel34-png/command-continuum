import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-[17px] text-muted-foreground">
          A página que você procura não está disponível.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-[17px] font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar à página do curso
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Não foi possível carregar a página
        </h1>
        <p className="mt-2 text-[17px] text-muted-foreground">
          Tente carregar novamente ou volte à página do curso.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-[17px] font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-[17px] font-medium text-foreground transition-colors hover:bg-accent"
          >
            Voltar à página do curso
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Comandos Elétricos Expert | Formação prática" },
      {
        name: "description",
        content:
          "Aprenda a interpretar diagramas, montar circuitos e analisar falhas com o curso Comandos Elétricos Expert.",
      },
      { name: "author", content: "Sandro Zander" },
      {
        property: "og:title",
        content: "Comandos Elétricos Expert | Formação prática",
      },
      {
        property: "og:description",
        content:
          "Aprenda a interpretar diagramas, montar circuitos e analisar falhas com o curso Comandos Elétricos Expert.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },

      {
        name: "twitter:title",
        content: "Comandos Elétricos Expert | Formação prática",
      },
      {
        name: "twitter:description",
        content:
          "Aprenda a interpretar diagramas, montar circuitos e analisar falhas com o curso Comandos Elétricos Expert.",
      },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon-uploaded.svg?v=20261009-3" },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}


function LovableBadgeGuard() {
  useEffect(() => {
    const removeLovableBadge = () => {
      const candidates = document.querySelectorAll<HTMLElement>(
        '#lovable-badge, [data-lovable-badge], [class*="lovable-badge"], a[href*="lovable.dev"], a[href*="lovable.app"]',
      );
      candidates.forEach((element) => {
        const text = (element.textContent || "").toLowerCase();
        const aria = (element.getAttribute("aria-label") || "").toLowerCase();
        const id = (element.id || "").toLowerCase();
        const className = (element.getAttribute("class") || "").toLowerCase();
        const isLovableBadge =
          id.includes("lovable-badge") ||
          className.includes("lovable-badge") ||
          text.includes("made with lovable") ||
          text.includes("feito com lovable") ||
          aria.includes("made with lovable") ||
          aria.includes("feito com lovable");
        if (isLovableBadge) element.remove();
      });
    };
    removeLovableBadge();
    const observer = new MutationObserver(removeLovableBadge);
    observer.observe(document.documentElement, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
  return null;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LovableBadgeGuard />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
