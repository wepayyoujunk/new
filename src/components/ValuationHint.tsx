interface ValuationHintProps {
  variant?: "default" | "muted" | "inline";
  className?: string;
}

const TEXT =
  "Heads up: estimates above are hours + labor only. Item valuation is the next step — at pickup we appraise anything with fair resale value and credit you 50% off this total. Items with no resale value just get hauled.";

export function ValuationHint({ variant = "default", className = "" }: ValuationHintProps) {
  if (variant === "inline") {
    return (
      <p className={`text-xs leading-snug text-slate-500 ${className}`}>
        <span className="font-semibold text-emerald-700">Item valuation happens after the estimate.</span>{" "}
        We appraise items with fair resale value at pickup and credit you 50% off this total.
      </p>
    );
  }

  if (variant === "muted") {
    return (
      <p className={`text-sm leading-snug text-slate-600 ${className}`}>{TEXT}</p>
    );
  }

  return (
    <div
      className={`rounded-xl border border-emerald-200 bg-emerald-50/70 px-4 py-3 text-sm leading-snug text-emerald-900 ${className}`}
    >
      <p>
        <span className="font-bold">Item valuation comes after the estimate.</span>{" "}
        The number above is hours and labor only. At pickup we appraise anything with
        fair resale value and credit you 50% off this total — if credits exceed the
        bill, we cut you a check.
      </p>
    </div>
  );
}
