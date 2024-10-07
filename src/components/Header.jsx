
export default function Header() {
    return (
        <header className='flex items-center p-4 justify-between gap-4'>
            <a href="/"><h1 className="font-medium">
                Transcribe
                <span className='text-blue-400 bold'>Translate</span>          </h1></a>

            <a href="/" className='specialBtn rounded-lg text-sm px-3 py-2 text-blue-400 flex items-center gap-2'>
                <p>New</p>
                <i className='fa-solid fa-plus'>

                </i>
            </a>
        </header>
    )
}
