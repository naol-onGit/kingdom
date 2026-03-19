import Header from "@/components/Header";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-slide-down">
            Terms of Service
          </h1>
          <p className="text-muted-foreground animate-slide-up stagger-1">
            Last updated: March 20, 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using Deldey Recruitment Agency's website and services, you agree to be bound by these Terms of Service. 
              If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Use License</h2>
            <p className="text-muted-foreground mb-4">
              Permission is granted to temporarily access the materials on Deldey Recruitment Agency's website for personal, 
              non-commercial transitory viewing only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground">
              All content on this website, including text, images, logos, and designs, is the property of 
              Deldey Recruitment Agency and is protected by international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
            <p className="text-muted-foreground">
              The materials on Deldey Recruitment Agency's website are provided on an "as is" basis. We make no 
              warranties, expressed or implied, and hereby disclaim all other warranties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p className="text-muted-foreground">
              These terms shall be governed by and construed in accordance with the laws of the Federal Democratic Republic of Ethiopia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-muted-foreground mt-4">
              Email: info@deldey.com<br />
              Address: Addis Ababa, Ethiopia
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Terms;
