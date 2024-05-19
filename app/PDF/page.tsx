"use client";
export default function PDF() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24  bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
      <iframe className="aspect-auto" src="./resume.pdf#view=fitH" width="700" height="800"/>
      </main>
    </>
  );
}
