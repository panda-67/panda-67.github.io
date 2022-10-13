import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Frame from "../../layouts/layout"

const ExperiencePage = (
  {
    pageContext: {breadcrumb: {crumbs}}
  }
) => {
  const gambar = `https://images.unsplash.com/photo-1620509400948-f9c2c0a61e37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`
  const gambar2 = `https://images.unsplash.com/photo-1619369029907-b8d8d5eac859?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`
  const gambar3 = `https://images.unsplash.com/photo-1628158088936-68ccaaa400dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`
  const gambar4 = `https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80`
  return (
    <Frame title="Experience" bread={crumbs}>
      <div className="w-full max-w-5xl mx-auto px-4 my-4 space-y-8 font-sans">
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <div className="mx-auto">
            <StaticImage
              src={gambar}
              title="Palm Oil"
              alt="Plantations"
              width={360}
              className="object-fill w-80 h-52 rounded-lg my-4"
            />
          </div>
          <div className="px-4 lg:px-0">
            <h3>Community Palm Oil Plantations Survey</h3>
            <h2><b>ETH Zurich</b></h2>
            <p>Melakukan survei kepada masyarakat perkebunan sawit mengenai pengaruh kebijakan pemerintah terhadap
              kesejahteraan masyarakat petani sawit dalam rangka Riset Disertasi Peneliti Doktoral ETH Zurich bekerjasama
              dengan Institut Pertanian Bogor di Kabupaten Nagan Raya, Kabupaten Aceh Barat Daya, Kabupaten Aceh
              Selatan dan Kabupaten Aceh Singkil.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-2 md:gap-8">
          <div className="mx-auto">
            <StaticImage
              src={gambar2}
              title="Sumatran Orangutan"
              alt="Orangutan"
              width={360}
              className="object-fill w-80 h-52 rounded-lg my-4"
            />
          </div>
          <div className="px-4 lg:px-0 md:text-right">
            <h3>Sumatran Orangutan Survey</h3>
            <h2><b>SOCP</b></h2>
            <p>Melakukan survei orangutan sumatra di Kawasan Ekosistem Leuser dengan posisi sebagai ketua tim survei
              lapangan. Survei ini merupakan survei ulangan dari survei yang telah dilakukan 10 tahun sebelumnya.</p>
            <p>Survei ini diselenggarakan oleh Sumatra Orangutan Conservation Program (SOCP) bekerjasama dengan Yayasan Ekosistem Lestari (YEL)</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <div className="mx-auto">
            <StaticImage
              src={gambar4}
              title="Graphic Design"
              alt="Graphic"
              width={360}
              className="object-fill w-80 h-52 rounded-lg my-4"
            />
          </div>
          <div className="px-4 lg:px-0">
            <h3>Graphic Designer</h3>
            <h2><b>Jroh Production</b></h2>
            <p>Sebagai setting grafis, saya bertugas mempersiapkan file-file desain untuk dicetak.
              Selain itu, saya juga melayout desain dan membuat desain seperti, banner, label,
              spanduk, logo, buku, pin, dll.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-2 md:gap-8">
          <div className="mx-auto">
            <StaticImage
              src={gambar3}
              title="Mapping Technician"
              alt="Mapping"
              width={360}
              className="object-fill w-80 h-52 rounded-lg my-4"
            />
          </div>
          <div className="px-4 lg:px-0 md:text-right">
            <h3>Mapping Technician</h3>
            <p>Melakukan pemetaan pada kawasan Lembah Seulawah Kabupaten Aceh Besar.</p>
          </div>
        </div>
      </div>
    </Frame>
  )
}

export default ExperiencePage