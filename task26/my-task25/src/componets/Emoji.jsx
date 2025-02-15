const  Emoji = ({ emoji, voices, onClick }) => {

        return (
            <div>
                <ul>
                    <li className="emj" onClick={onClick} style={{ listStyleType: 'none' }}>{emoji}</li>
                    <li className="voices" style={{ listStyleType: 'none' }}>{voices || "No voices"}</li>
                </ul>
            </div>
        );
    }

export default Emoji;
