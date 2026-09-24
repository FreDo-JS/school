export function AddNewOffer()
{
    return(<>
        <form action="">
            <input type="text" placeholder="Nazwa oferty" /> <br />
            <input type="text" placeholder="Nazwa firmy" /> <br />
            <select name="" id="">
                <option value="">Junior</option>
                <option value="">Mid</option>
                <option value="">Senior</option>
            </select>
            <p>Rodzaj umowy</p>
            <select name="" id="">
                <option value="">B2B</option>
                <option value="">UoP</option>
                <option value="">UZ</option>
            </select>
            <div>
                <label htmlFor="part">
                    <input type="radio" id="part" name="type" />Part-time
                </label>
                   <label htmlFor="full">
                    <input type="radio" id="full" name="type" />Full-time
                </label>
            </div>
            <button>Dodaj</button>
        </form>
    </>)
}
