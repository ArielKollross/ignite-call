import Image from "next/image";
import previewImage from "../../../assets/app-preview.png";

export function Preview() {
	return (
		<Image
			src={previewImage}
			alt="Imagem de calandário simbolizando a aplicação em funcionamento"
			height={400}
			quality={100}
			priority
		/>
	);
}
