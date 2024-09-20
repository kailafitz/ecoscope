import React from "react";
import EcoscopeButton from "./Button";
import Container from "./Container";
import { H3 } from "./Headings";

const About = () => {
  return (
    <div className="bg-secondary">
      <Container className="flex flex-col justify-center py-32 md:py-0 md:h-screen">
        <div className="flex flex-col md:flex-row justify-center md:justify-between text-white space-y-16 md:space-y-0 md:space-x-20 lg:space-x-32">
          <div>
            <H3>About Us</H3>
            <p className="text-2xl mb-4">
              Lorem ipsum dolor sit amet consectetur. Lacus arcu risus
              pellentesque interdum at et nunc nisl blandit. Mission statement
              maybe?
            </p>
            <p className="text-sm mb-10">
              Lorem ipsum dolor sit amet consectetur. Lacus arcu risus
              pellentesque interdum at et nunc nisl blandit. Facilisis eu
              ultrices nec lacus auctor. Facilisi blandit pretium lorem eget. Et
              ut in sed dolor diam nibh.
              <br />
              Purus sed urna in pretium. Ornare purus fermentum varius ornare
              fringilla id blandit. Etiam integer tellus tincidunt ut
              ullamcorper. Porttitor metus volutpat in in nec commodo nisl
              lobortis faucibus. Ac fames arcu integer aliquam at id lectus eget
              vestibulum. Egestas tellus massa senectus pellentesque scelerisque
              porta id. At nulla quis porttitor nisl. Netus integer mi tristique
              id. Dis est congue odio amet auctor libero ultrices nullam mattis.
              Cum aliquet quis amet eros diam viverra nunc nulla molestie. Non
              eu tempor in vulputate phasellus. Est fermentum ipsum magnis
              tempor orci consequat. Dignissim eros eu massa et erat. Orci sit
              facilisi tincidunt etiam enim habitasse.
            </p>
            <EcoscopeButton href="/about-us" className="w-full md:w-60">
              Read more
            </EcoscopeButton>
          </div>
          <img
            className="w-4/5 m-auto sm:w-1/3 lg:w-5/12 object-contain rounded-full"
            src="/_assets/about-us.png"
          />
        </div>
      </Container>
    </div>
  );
};

export default About;
