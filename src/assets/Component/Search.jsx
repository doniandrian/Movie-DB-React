export default function Search({search, handlesearch, closeopen, handleclose, placeholder }) {
    return (
        <div className="Search">

            <input className='SearchInput' value={search} onChange={(res) => handlesearch(res.target.value)} type="text" placeholder={placeholder}></input>
            {closeopen && <button className='CloseButton' onClick={() => handleclose()}>✖️</button>}
        </div>
    )
}