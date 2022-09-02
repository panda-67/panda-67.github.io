import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Frame from "../../layouts/layout";

export default function ExperiencePage() {
  const gambar =`https://images.unsplash.com/photo-1620509400948-f9c2c0a61e37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`
  const gambar2 =`https://images.unsplash.com/photo-1619369029907-b8d8d5eac859?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`
  const gambar3 =`https://images.unsplash.com/photo-1628158088936-68ccaaa400dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`
  const gambar4 =`https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80`
  return (
    <Frame title={"Experience"}>
      <div className="w-full max-w-5xl mx-auto px-4 my-4 space-y-8 font-sans">
        {/* <h2>Experience</h2> */}
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
            <p>Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Cras pulvinar mattis nunc sed. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Nec ultrices dui sapien eget mi proin sed libero enim. Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat. Donec et odio pellentesque diam volutpat commodo sed. Maecenas ultricies mi eget mauris pharetra et. Vulputate eu scelerisque felis imperdiet proin. Nulla malesuada pellentesque elit eget gravida cum. Velit aliquet sagittis id consectetur purus.</p>
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
            <p>Venenatis cras sed felis eget. Facilisis magna etiam tempor orci eu lobortis. Diam vulputate ut pharetra sit amet. Sed euismod nisi porta lorem mollis. Leo in vitae turpis massa sed elementum tempus. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Sagittis aliquam malesuada bibendum arcu. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Gravida neque convallis a cras semper auctor.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <div className="mx-auto">
            <StaticImage
              src={gambar3}
              title="Mapping Technician"
              alt="Mapping"
              width={360}
              className="object-fill w-80 h-52 rounded-lg my-4"
            />
          </div>
          <div className="px-4 lg:px-0">
            <h3>Mapping Technician</h3>
            <p>Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Fusce id velit ut tortor pretium viverra suspendisse. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Purus gravida quis blandit turpis cursus in. Arcu non sodales neque sodales ut etiam sit amet. Mauris cursus mattis molestie a iaculis at. Quam pellentesque nec nam aliquam sem et. Purus non enim praesent elementum facilisis leo. Quam elementum pulvinar etiam non quam lacus. Ut eu sem integer vitae justo eget.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-2 md:gap-8">
          <div className="mx-auto">
            <StaticImage
              src={gambar4}
              title="Graphic Design"
              alt="Graphic"
              width={360}
              className="object-fill w-80 h-52 rounded-lg my-4"
            />
          </div>
          <div className="px-4 lg:px-0 md:text-right">
            <h3>Graphic Designer</h3>
            <p>Venenatis cras sed felis eget. Facilisis magna etiam tempor orci eu lobortis. Diam vulputate ut pharetra sit amet. Sed euismod nisi porta lorem mollis. Leo in vitae turpis massa sed elementum tempus. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Sagittis aliquam malesuada bibendum arcu. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Gravida neque convallis a cras semper auctor.</p>
          </div>
        </div>
      </div>
    </Frame>
  )
}