import Header from "@/components/Header";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            About Deldey Finishing Specialist
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up stagger-1">
            Bridging the gap between skilled talent and the businesses that need them most.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-16 space-y-6 text-muted-foreground animate-slide-up stagger-2">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <p>
            Deldey Finishing Specialist, subsidary of Deldey Group, was founded with a clear mission: to connect Ethiopia's skilled workforce
            with businesses that need reliable, professional labor. We saw a gap in the market — interior designers, talented workers
            struggling to find opportunities and employers struggling to find dependable teams.
          </p>
          <p>
            Based in Addis Ababa, we've built a network of vetted professionals across interior design, construction, electrical,
            plumbing, maintenance, landscaping, and general labor. Every worker in our network is carefully
            screened to ensure quality and reliability.
          </p>
          <p>
            Whether you need a single specialist or a full crew, Deldey delivers the right people for the job —
            on time, every time.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-16 rounded-2xl bg-card p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              We believe that Ethiopia's workforce is its greatest asset. Deldey Finishing Specialist is dedicated to
              unlocking that potential by:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Modern and timeless interior design solutions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Connecting skilled workers with meaningful employment opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Providing businesses with reliable, vetted workforce solutions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Supporting professional development and fair labor practices</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Building long-term partnerships based on trust and quality</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-muted-foreground">
                We deliver on our promises. Every worker we place has been vetted for skill, professionalism, and dependability.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-muted-foreground">
                We maintain high standards in every placement, ensuring our clients receive skilled professionals who take pride in their work.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                Fair wages, transparent processes, and honest communication are at the core of everything we do.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-muted-foreground">
                We're committed to strengthening Ethiopia's workforce and creating opportunities that uplift communities.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 rounded-2xl bg-card">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're looking to elevate your house with elegant interior designs, skilled workers or join our team, we'd love to hear from you.
          </p>
          <a href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </a>
        </section>
      </main>
    </div>
  );
};

export default About;
