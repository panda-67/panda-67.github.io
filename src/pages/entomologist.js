import * as React from "react";
import { graphql, Link } from "gatsby";
import Frame from "../layouts/template";

const EntomologistPage = ({
  pageContext: {
    breadcrumb: { crumbs },
  },
}) => {
  return (
    <Frame bread={crumbs}>
      <article className="w-full max-w-xs md:max-w-2xl lg:max-w-6xl mx-auto px-4 my-4 space-y-8">
        <ul className="flex flex-col gap-y-6 py-4 text-zinc-500">
          <Link to="https://www.hindawi.com/journals/tswj/2022/9475722/">
            <li>
              <h4 className="font-semibold text-zinc-600 md:text-lg hover:text-sky-700">
                Taxonomic and Ecological Notes on <em>Termes propinquus</em>{" "}
                <span className="font-edu">Holmgren</span>, 1914 Known from
                Sumatra (Blattodea: Termitoidae: Termitidae)
              </h4>
              <p>The Scientific World Journal (2022)</p>
              <author className="text-sm">
                Samsul Muarrif, Samadi Samadi, Jauharlina Jauharlina, Dalil
                Sutekad, Syaukani Syaukani
              </author>
            </li>
          </Link>
          <Link to="https://iopscience.iop.org/article/10.1088/1755-1315/667/1/012088/meta">
            <li>
              <h4 className="font-semibold text-zinc-600 md:text-lg hover:text-sky-700">
                Inventory of fungi from termite nests at Gunung Leuser National
                Park, Northern Sumatra
              </h4>
              <p>
                IOP Conference Series: Earth and Environmental Science (2021)
              </p>
              <author className="text-sm">
                S Hanum, L Fitri, O Lisa, S Samingan, A Alfizar, D Sutekad, N
                Novita, S Muarrif, S Syaukani
              </author>
            </li>
          </Link>
          <Link to="https://zse.pensoft.net/article/31636/">
            <li>
              <h4 className="font-semibold text-zinc-600 md:text-lg hover:text-sky-700">
                Taxonomy of the genus <em>Longipeditermes</em>{" "}
                <span className="font-edu">Holmgren</span> (Termitidae,
                Nasutitermitinae) from the Greater Sundas, Southeast Asia
              </h4>
              <p>Zoosystematics and Evolution (2019)</p>
              <author className="text-sm">
                Syaukani Syaukani, Graham J Thompson, Takeshi Yamasaki, Ahmad
                Sofiman Othman, Samsul Muarrif, Muhammad Ali Sarong, Djufri
                Djufri, Katsuyuki Eguchi
              </author>
            </li>
          </Link>
          <Link to="https://www.cabdirect.org/cabdirect/abstract/20203226983">
            <li>
              <h4 className="font-semibold text-zinc-600 md:text-lg hover:text-sky-700">
                Redescription of soil-feeding nasutitermitine
                (Subulitermes-branch): <em>Oriensubulitermes inanis</em>{" "}
                <span className="font-edu">Haviland </span> (Termitidae:
                Nasutitermitinae) in Indonesia
              </h4>
              <p>Jurnal Entomologi Indonesia (2019)</p>
              <author className="text-sm">
                Syaukani Syaukani, Husni Husni, Alfizar Alfizar, Elly
                Kesumawati, Novita Novita, Siti Rusdiana, Samsul Muarrif, Teguh
                Pribadi
              </author>
            </li>
          </Link>
        </ul>
      </article>
    </Frame>
  );
};

export default EntomologistPage;

export const Head = ({
  data: {
    site: { meta },
  },
}) => (
  <>
    <title>Experience | {meta.title}</title>
    <meta name="description" content={meta.desc} />
    <meta name="keywords" content="resume, portfolio, profile" />
  </>
);

export const expQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        author
        desc
      }
    }
  }
`;
