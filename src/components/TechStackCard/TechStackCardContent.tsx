import ILCard from "../ILCard/ILCard"

function TechStackCardContent() {
    return (
        <div className="flex flex-row justify-center bg-slate-800 rounded-b-xl p-2 h-2/3">
            <ILCard image_path="/src/assets/images/react.png" link="https://react.dev/" link_name="React"></ILCard>
            <ILCard image_path="/src/assets/images/tailwind.png" link="https://tailwindcss.com/" link_name="Tailwind"></ILCard>
            <ILCard image_path="/src/assets/images/godot.png" link="https://godotengine.org/" link_name="Godot"></ILCard>
            <ILCard image_path="/src/assets/images/unity.png" link="https://unity.com/" link_name="Unity"></ILCard>
            <ILCard image_path="/src/assets/images/pandas.ico" link="https://pandas.pydata.org/" link_name="Pandas"></ILCard>
        </div>
    )
}

export default TechStackCardContent