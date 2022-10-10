import { Link, graphql } from "gatsby";
import * as React from "react";
import Frame from "../layouts/frame";

const AboutPage = ({ data: { site: { meta } } }) => {
  return (
    <Frame title={"About"}>
      <div className="w-full max-w-7xl mx-auto px-8 pt-24 pb-4">
        <h2>About {meta.title}</h2>
        <div className="font-sans leading-8 my-8">
          <p>Terlahir dengan nama Syamsul Mu'arrif, pada tahun 1992, dari kedua orang tua. Saya menjalani masa kecil yang indah bersama teman-teman di sebuah desa kecil yang terletak pada ujung Pulau Sumatra, yaitu desa yang bernama Gampong Lam Badeuk. Saya menyelesaikan pendidikan tingkat dasar pada sebuah Madrasah Ibtidayah tahun 2004, yang terletak tidak jauh dari tempat saya tinggal yaitu di Kemukiman Lamteungoh. Kemudian saya menyelesaikan pendidikan tingkat menengah pada sebuah sekolah yang terdapat di Kota Banda Aceh tahun 2007, yaitu <Link className="link-primary" to="https://mtsnmodelbandaaceh.sch.id/" target={"_blank"} noopener norel >Madrasah Tsanawiyah Negeri (MTsN) Model </Link>Banda Aceh (MTsN 1 Banda Aceh). Setelah selesai dari MTsN, saya melanjutkan pendidikan pada <Link className="link-primary" to="https://sman4ba.sch.id/" target={"_blank"} noopener norel >Sekolah Menengah Atas (SMA) Negeri 4</Link> Kota Banda Aceh dan selesai tahun 2010. Tidak hanya sampai disitu, saya juga melanjutkan pendidikan hingga tingkat universitas pada sebuah universitas negeri di Aceh. Universitas tersebut dikenal dengan nama <Link className="link-primary" to="https://unsyiah.ac.id/" target={"_blank"} noopener norel >Universitas Syiah Kuala</Link> (USK) Banda Aceh. Saya berhasil menyelesaikan <Link to="/portfolio/education" className="link-primary" target={"_blank"}>pendidikan sarjana</Link> pada tahun 2015 dengan durasi 4 tahun 6 bulan dan IPK 3,4/4.</p><br />

          <p>Memiliki minat pada lingkungan membuat saya memilih jurusan biologi. Selain itu, juga membuat saya gemar untuk melakukan hiking dan membuat saya lebih dekat dengan alam. Kegemaran hiking membuat saya bergabung dengan organisai pecinta alam. Pada organisasi ini saya banyak belajar, salah satunya bagian navigasi. Kemampuan navigasi juga saya dapatkan dari perkuliahan. Sebagai mahasiswa biologi saya dituntut untuk melakukan kegiatan lapangan. Lapangan yang dimaksud disini adalah kegiatan mengunjungi alam liar yang terdapat di daerah pegunungan. Berdasarkan hal tersebut saya semakin mendalami kemapuan navigasi, seperti mempelajari aplikasi pemetaan untuk lebih menunjang kemampuan navigasi. Setelah selesai kuliah sarjana saya juga masih sering mengunjungi alam liar untuk membantu mahasiswa-mahasiswa lain dalam melakukan penelitian. Selain itu, saya juga beberapa kali melakukan survei di alam liar, dimana hal ini sangat membutuhkan kemampuan seperti navigasi.</p><br />

          <p>Selain minat pada lingkungan, saya juga gemar dengan bidang grafis dan web desain. Kegemaran ini membuat saya banyak mempelajari tentang disain grafis dan <em>web development</em>. Memiliki kemampuan desain grafis membuat saya pernah bekerja sebagai <em>graphic setting</em> pada sebuah perusahaan percetakan di Kota Banda Aceh, yaitu Jroh Production. Ketika masa perkuliahan saya juga sering dimintai bantuan oleh mahasiswa lain atau pun dosen dalam hal membuat desain-desain grafis untuk kebutuhan presentasi dan lain-lain. Berbeda dengan kemampuan navigasi, kedua kemampuan ini saya pelajari secara autodidak baik desain grafis maupun desain website.</p><br />

          <p>Hingga kini saya masih aktif pada ketiga hal tersebut di atas. Seperti melakukan survei atau mengunjungi alam liar apabila diperlukan. Atau membuat disain grafis untuk orang-orang yang membutuhkan maupun untuk diri saya sendiri. Disamping itu, juga aktif mempelajari dan mendevelop website, salah satunya seperti website ini.</p>
        </div>
      </div>
    </Frame>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        author
        desc
      }
    }
  }
`