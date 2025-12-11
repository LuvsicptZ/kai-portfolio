export default function SectionHeading({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-3xl font-semiBold text-slate-800 text-center mb-10 mt-[200px]">
            {children}
        </h2>
    )
}