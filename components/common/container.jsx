export default function Container({ children }) {
    return (
        <div className="mx-auto w-full max-w-7xl px-8 p-10">
            {children}
        </div>
    )
}