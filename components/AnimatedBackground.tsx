/**
 * Aurora drift background — 3 blob màu sky/cyan trôi chậm phía sau toàn trang.
 * Pure CSS, không có JS listener nên gần như zero cost.
 */
export function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-20 overflow-hidden"
    >
      <div
        className="absolute -top-[20%] left-[40%] h-[55vh] w-[55vw] -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl animate-aurora-1"
      />
      <div
        className="absolute top-[30%] -left-[10%] h-[45vh] w-[45vw] rounded-full bg-cyan-500/15 blur-3xl animate-aurora-2"
      />
      <div
        className="absolute bottom-[-10%] right-[-5%] h-[50vh] w-[50vw] rounded-full bg-sky-400/15 blur-3xl animate-aurora-3"
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}
