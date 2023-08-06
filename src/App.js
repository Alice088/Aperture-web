import React from 'react';
import Header from './components/header';
import Banner from './components/Banner';
import WeDoPlaceOfPhoto from './components/WeDoPlaceOfPhoto';
import BigPhotoTemplate from './components/BigPhotoTemplate';
import ToolsWeUseBlock from './components/ToolsWeUseBlock';
import Clients from './components/Clients';
import HelpPhotographyBlock from './components/HelpPhotographyBlock';
import Footer from './components/Footer';



export default function App() {
  return (
    <div>
      <Header /> {/*<header> is inside */}

      <main>
        <article><Banner /> </article>

        <article><WeDoPlaceOfPhoto /></article>

        <article>
          <BigPhotoTemplate
            photo={"image/Sunset-at-Mount-Fuji.jpeg"}
            header={`Sunset at Mount Fuji`}
            description={`Duis tristique sed lorem a vestibulum.
              Cras commodo consequat orci, in convallis risus egestas non.`
            }

            camera={{
              time: `1"`,
              aperture: `f/16`,
              iso: `400`,
              place: `Japan`
            }}
          />
        </article>

        <article><ToolsWeUseBlock /></article>

        <article>
          <BigPhotoTemplate
            photo={"image/monstera.jpeg"}
            header={`Monstera Leafs`}
            description={`Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices,
             ut faucibus orci tincidunt.`
            }

            camera={{
              time: `1/400s`,
              aperture: `f/3,5`,
              iso: `100`,
              place: `Costa Rica`
            }}
          />
        </article>

        <article><Clients /></article>

        <article>
          <BigPhotoTemplate
            photo={"image/starHill.jpg"}
            header={`Monstera Leafs`}
            description={`Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices,
             ut faucibus orci tincidunt.`
            }

            camera={{
              time: `1/400s`,
              aperture: `f/3,5`,
              iso: `100`,
              place: `Costa Rica`
            }}
          />
        </article>

        <article><HelpPhotographyBlock /></article>

      </main>


      <footer>
        <Footer />
      </footer>

    </div>
  )
}