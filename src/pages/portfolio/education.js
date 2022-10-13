import * as React from "react";
import Frame from "../../layouts/layout";

const EducationPage = (
	{
		pageContext: { breadcrumb: { crumbs } }
	}
) => {
	return (
		<Frame title="Education" bread={crumbs}>
			<div className="h-max">
				<div className="m-10 space-y-10 flex flex-col items-center">
					<div className="w-40">
						<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 52 52" enableBackground="new 0 0 52 52" className="fill-zinc-600">
							<g display="none">
								<path display="inline" opacity="0.2" enableBackground="new" d="M0,0v52h52V0H0z M49.9,49.9H2.1V2.1h47.8   C49.9,2.1,49.9,49.9,49.9,49.9z" />
							</g>
							<g display="none">
								<rect x="2" y="2" display="inline" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="48" height="48" />
							</g>
							<g display="none">
								<g display="inline" opacity="0.5">
									<line fill="none" strokeWidth="0.25" strokeMiterlimit="10" x1="50" y1="2" x2="2" y2="50" />
									<line fill="none" strokeWidth="0.25" strokeMiterlimit="10" x1="2" y1="2" x2="49.9" y2="50" />
									<rect x="2" y="2" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="2" height="48" />
									<rect x="4" y="2" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="2" height="48" />
									<rect x="6" y="2" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="2" height="48" />
									<rect x="8" y="2" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="2" height="48" />
									<rect x="10" y="2" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="2" height="48" />
									<rect x="12" y="2" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="2" height="48" />
									<rect x="14" y="2" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="2" height="48" />
									<rect x="16" y="2" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="2" height="48" />
									<rect x="18" y="2" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="2" height="48" />
									<rect x="20" y="2" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="2" height="48" />
									<rect x="22" y="2" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="2" height="48" />
									<rect x="24" y="2" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="2" height="48" />
									<rect x="26" y="2" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="2" height="48" />
									<rect x="28" y="2" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="2" height="48" />
									<rect x="30" y="2" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="2" height="48" />
									<rect x="32" y="2" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="2" height="48" />
									<rect x="34" y="2" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="2" height="48" />
									<rect x="36" y="2" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="2" height="48" />
									<rect x="38" y="2" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="2" height="48" />
									<rect x="40" y="2" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="2" height="48" />
									<rect x="42" y="2" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="2" height="48" />
									<rect x="44" y="2" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="2" height="48" />
									<rect x="46" y="2" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="2" height="48" />
									<rect x="48" y="2" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="2" height="48" />
									<rect x="2" y="48" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="48" height="2" />
									<rect x="2" y="46" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="48" height="2" />
									<rect x="2" y="44" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="48" height="2" />
									<rect x="2" y="42" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="48" height="2" />
									<rect x="2" y="40" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="48" height="2" />
									<rect x="2" y="38" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="48" height="2" />
									<rect x="2" y="36" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="48" height="2" />
									<rect x="2" y="34" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="48" height="2" />
									<rect x="2" y="32" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="48" height="2" />
									<rect x="2" y="30" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="48" height="2" />
									<rect x="2" y="28" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="48" height="2" />
									<rect x="2" y="26" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="48" height="2" />
									<rect x="2" y="24" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="48" height="2" />
									<rect x="2" y="22" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="48" height="2" />
									<rect x="2" y="20" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="48" height="2" />
									<rect x="2" y="18" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="48" height="2" />
									<rect x="2" y="16" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="48" height="2" />
									<rect x="2" y="14" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="48" height="2" />
									<rect x="2" y="12" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="48" height="2" />
									<rect x="2" y="10" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="48" height="2" />
									<rect x="2" y="8" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="48" height="2" />
									<rect x="2" y="6" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="48" height="2" />
									<rect x="2" y="4" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="48" height="2" />
									<rect x="2" y="2" fill="none" strokeWidth="0.25" strokeMiterlimit="10" width="48" height="2" />
								</g>
							</g>
							<g>
								<path d="M25.8,26.7c-1.2,0.1-2.3-0.4-3.5-0.8c-6.3-2.1-12.7-4.2-19-6.3c-0.4-0.2-0.7-0.3-1-0.6   c-0.4-0.3-0.4-0.7,0-1c0.3-0.2,0.7-0.5,1.1-0.6c6.8-2,13.5-4,20.3-6.1c1.5-0.5,3.1-0.5,4.7,0c6.7,2,13.4,4,20.1,6   c0.4,0.2,0.8,0.3,1.2,0.6c0.5,0.3,0.5,0.8,0,1.1c-0.3,0.2-0.6,0.4-1,0.5C42,21.7,35.3,24,28.5,26.2C27.6,26.6,26.8,26.7,25.8,26.7z   " />
								<path d="M12.5,27c-1-0.2-1.2,0.4-1.2,0.9c0,2.6,0,5.1,0,7.6c0,0.9,0.3,1.4,0.9,2c0.2,0.2,0.5,0.4,0.7,0.6   c1.6,1.1,3.5,1.8,5.4,2.3c3.8,1,7.6,1.2,11.5,0.7c2.5-0.3,5-1,7.3-2c1-0.5,2-1,2.7-1.8c0.5-0.5,0.7-1,0.6-1.7   c0.1-2.4,0.1-4.9,0.1-7.4c0-1.4-1-1.2-1.4-1.1c-3.5,1.2-7.2,2.3-10.7,3.5c-1.8,0.6-3.5,0.6-5.2,0L12.5,27z" />
								<path d="M45.9,24.7c-0.3,0.1-0.4,0.2-0.4,0.6c0,2.3,0,4.5,0,6.8c0,0.2-0.1,0.5-0.2,0.7c-0.5,1.2-1,2.4-1.4,3.6   c-0.4,1.1-0.2,2.3,0.6,3.1c0.2,0.3,0.6,0.6,0.9,0.8c0.3,0.3,0.8,0.4,1.2,0.5c0.7,0.1,1.3-0.3,1.8-0.7c0.2-0.2,0.5-0.4,0.7-0.7   c0.6-0.8,0.7-1.8,0.5-2.7c-0.3-1.4-0.9-2.6-1.5-3.8c-0.2-0.2-0.2-0.6-0.2-0.8c0-2.5,0-4.9,0-7.4c0-0.5-0.4-0.4-0.6-0.3L45.9,24.7z" />
							</g>
						</svg>
					</div>
					<div className="text-center text-zinc-700 font-semibold">
						<a target="_blank" rel="noopener noreferrer" href="https://unsyiah.ac.id">
							<h2 className="text-3xl tracking-wide font-teko">
								Universitas Syiah Kuala
							</h2>
						</a>
						<h4 className="text-lg tracking-tighter">
							Fakultas Matematika dan Ilmu Pengetahuan Alam
						</h4>
						<p className="text-xl font-serif">Jurusan Biologi</p>
					</div>

					<div className="text-center max-w-2xl">
						<p className="font-light">
							<strong className="font-medium">Thesis Title:</strong> Detection of
							Avian Influenza Virus H5N1 on Laying Hens (Layer) in Aceh Besar by
							the method of RT-PCR (Reverse Transcriptase Polymerase Chain
							Reaction).
							<br />
							GPA: 3.4 / 4
						</p>
					</div>
				</div>
			</div>
		</Frame>
	)
}

export default EducationPage