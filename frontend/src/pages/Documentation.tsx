import React from 'react';
import { 
  FaCopy, 
  FaBars, 
  FaSearch,  
  FaBook, 
  FaLayerGroup, 
  FaCog, 
  FaInfoCircle, 
  FaUser, 
  FaFileAlt, 
  FaBolt, 
  FaPalette, 
  FaCode, 
  FaDesktop, 
  FaLink
} from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// ===== TYPES =====
interface Author {
  name: string;
  image?: string;
}

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

interface Feature {
  title: string;
  description: string;
}

interface ComponentInfo {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// ===== REUSABLE UI COMPONENTS =====
const CustomButton: React.FC<{
  variant?: 'default' | 'secondary' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}> = ({ variant = 'default', size = 'default', children, onClick, className = '', ...props }) => {
  return (
    <Button 
      variant={variant}
      size={size}
      className={`${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

const CustomCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  title?: string;
}> = ({ children, className = '', title, ...props }) => {
  return (
    <Card className={`bg-slate-900 border-slate-800 ${className}`} {...props}>
      {title && (
        <CardHeader>
          <CardTitle className="text-white">{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent className="text-white">
        {children}
      </CardContent>
    </Card>
  );
};

const UserAvatar: React.FC<{
  name: string;
  image?: string;
  size?: 'sm' | 'md' | 'lg';
}> = ({ name, image, size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-16 w-16'
  };

  return (
    <Avatar className={sizeClasses[size]}>
      <AvatarImage src={image} alt={name} />
      <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <FaUser className={size === 'lg' ? 'h-8 w-8' : size === 'md' ? 'h-6 w-6' : 'h-4 w-4'} />
      </AvatarFallback>
    </Avatar>
  );
};

// ===== CONTENT MODULES =====
const VideoEmbed: React.FC<{
  videoId: string;
  title: string;
  description?: string;
  link?: string;
}> = ({ videoId, title, description, link }) => {
  return (
    <CustomCard className="mb-12">
      <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {description && (
        <p className="text-sm text-slate-400">
          {description}{' '}
          {link && (
            <a href={link} className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-1" target="_blank" rel="noopener noreferrer">
              <FaLink className="h-3 w-3" />
              {link}
            </a>
          )}
        </p>
      )}
    </CustomCard>
  );
};

const ActionBox: React.FC<{
  title: string;
  description: string;
  buttonText: string;
  buttonAction?: () => void;
  variant?: 'primary' | 'gradient';
}> = ({ title, description, buttonText, buttonAction, variant = 'primary' }) => {
  return (
    <CustomCard className={`mb-12 ${variant === 'gradient' ? 'bg-gradient-to-r from-slate-900 to-slate-800' : ''}`}>
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-slate-300 mb-6">{description}</p>
      <CustomButton onClick={buttonAction}>
        {buttonText}
      </CustomButton>
    </CustomCard>
  );
};

const CodeBlock: React.FC<{
  code: string;
  language?: string;
  title?: string;
  copyable?: boolean;
}> = ({ code, language = 'javascript', title, copyable = true }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="mb-12">
      {title && <h3 className="text-2xl font-bold mb-6 text-white">{title}</h3>}
      <CustomCard className="p-0 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
          <Badge variant="secondary" className="bg-slate-700 text-slate-300 capitalize">
            {language}
          </Badge>
          {copyable && (
            <Button
              variant="ghost"
              size="sm"
              onClick={copyToClipboard}
              className="text-slate-400 hover:text-white h-auto p-2"
            >
              <FaCopy className="h-4 w-4 mr-2" />
              Copy
            </Button>
          )}
        </div>
        <pre className="p-4 overflow-x-auto text-sm bg-slate-900">
          <code className="text-slate-300">{code}</code>
        </pre>
      </CustomCard>
    </div>
  );
};

const FeatureList: React.FC<{
  features: Feature[];
}> = ({ features }) => {
  return (
    <div className="space-y-6">
      {features.map((feature, index) => (
        <div key={index} className="flex space-x-4">
          <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {index + 1}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
            <p className="text-slate-300">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const StepList: React.FC<{
  steps: string[];
}> = ({ steps }) => {
  return (
    <div className="space-y-6 mb-8">
      {steps.map((step, index) => (
        <div key={index} className="flex space-x-4">
          <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {index + 1}
          </div>
          <div>
            <p className="text-slate-300">{step}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const ContentSection: React.FC<{
  title: string;
  children: React.ReactNode;
  author?: Author;
  createdDate?: string;
}> = ({ title, children, author, createdDate }) => {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-white">{title}</h1>
        {(author || createdDate) && (
          <div className="flex items-center space-x-4 mb-6">
            <UserAvatar name={author?.name || 'User'} image={author?.image} />
            <div>
              {author && <p className="text-sm text-slate-400">{author.name}</p>}
              {createdDate && <p className="text-xs text-slate-500">Created: {createdDate}</p>}
            </div>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

const ComponentCard: React.FC<ComponentInfo> = ({ icon, title, description }) => {
  return (
    <CustomCard className="bg-slate-800 border-slate-700">
      <div className="text-purple-400 mb-3 flex justify-center">{icon}</div>
      <h3 className="font-semibold mb-2 text-white text-center">{title}</h3>
      <p className="text-sm text-slate-400 text-center">{description}</p>
    </CustomCard>
  );
};

const ImageBlock: React.FC<{
  src?: string;
  alt: string;
  caption?: string;
}> = ({ src, alt, caption }) => {
  return (
    <div className="mb-8">
      <CustomCard className="p-4">
        <img 
          src={src || "/api/placeholder/800/400"} 
          alt={alt} 
          className="w-full rounded-lg"
        />
        {caption && <p className="text-sm text-slate-400 mt-2 text-center">{caption}</p>}
      </CustomCard>
    </div>
  );
};

// ===== SECTION COMPONENTS =====
const IntroductionSection: React.FC = () => {
  const cmsFeatures: Feature[] = [
    {
      title: 'API-First Approach:',
      description: 'Headlesshost is designed with an API-first philosophy. It provides RESTful APIs that allow developers to fetch content and present it on any platform, enabling flexible content delivery.'
    },
    {
      title: 'Cloud-Based and SaaS:',
      description: 'Headlesshost is a cloud-based SaaS platform, meaning it is hosted and maintained by Headlesshost, freeing users from the need to manage their own infrastructure. This also allows for automatic updates and scalability.'
    },
    {
      title: 'User-Centric Interface:',
      description: 'Headlesshost offers a user-friendly web interface where non-technical users can easily create, edit, and manage content. This separation of concerns helps streamline content workflows.'
    },
    {
      title: 'Content Modeling:',
      description: 'Headlesshost allows users to create custom content models that define the structure of content types (e.g., blog posts, products, landing pages). This flexibility enables businesses to tailor the CMS to their specific needs.'
    }
  ];

  const codeExample = `import { HeadlessHost } from '@headlesshost/react';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const headlessHost = new HeadlessHost({
    apiKey: process.env.HEADLESSHOST_API_KEY,
    projectId: process.env.HEADLESSHOST_PROJECT_ID,
  });

  try {
    const content = await headlessHost.getContent('homepage');
    return NextResponse.json(content);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch content' },
      { status: 500 }
    );
  }
}`;

  return (
    <ContentSection 
      title="Introduction"
      author={{ name: "Jessica Walsh" }}
      createdDate="Aug 23, 2024"
    >
      <div className="mb-8">
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Welcome to the Headlesshost documentation sample for Next.js
        </p>
        <p className="text-slate-300 leading-relaxed">
          This template can be used to create a simple documentation website using Headlesshost and Next.js. 
          This sample comes with a number of pre-built components but can be easily extended with your own 
          custom components.
        </p>
      </div>

      <VideoEmbed 
        videoId="ZK-rNEhJIDs"
        title="Next.js - Knowledgebase"
        description="Watch the video above to guide you through the install process. You can also watch on YouTube with the link"
        link="https://youtu.be/ZK-rNEhJIDs?si=S-rjvh7pgz5bKnbl"
      />

      <ActionBox 
        title="Quickstart"
        description="The recommended development for this application is Vercel, the creators of Next.js. Using Vercel is the no-code approach and offers a number of hosting benefits when coupled with Headlesshost."
        buttonText="Deploy"
        variant="gradient"
      />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white">Headlesshost CMS</h2>
        <p className="text-slate-300 mb-8 text-lg leading-relaxed">
          The content in this sample is managed by Headlesshost which is a headless content management 
          system (CMS). Here's a breakdown of its key features and characteristics:
        </p>
        <FeatureList features={cmsFeatures} />
      </div>

      <ImageBlock 
        alt="Headlesshost CMS Interface"
        caption="Headlesshost CMS Interface showing content management capabilities"
      />

      <ActionBox 
        title="Action box"
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Recusandis hic veniam temporibus dolorum modi nisi tenetur omnis totam, sapiente doloribus accusamus veritatis eligendi qoas inventore dolore. Cumsum ipsa exercitationem repellat nobis aliquam soluta."
        buttonText="Start"
      />

      <CodeBlock 
        code={codeExample}
        title="Code Block"
        language="javascript"
      />

      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">Creative Work</h3>
          <p className="text-slate-300 mb-6">
            Design is one of the most important aspects of any agency business. We believe this is both the plan, and the process and plan with which to execute and deliver industry-leading services and solutions to our clients.
          </p>
          <ImageBlock alt="Creative Work Example" />
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">Max Party</h3>
          <p className="text-slate-300 mb-6">
            Have client in different time zones for the industry and say how it goes about a third way to see the changes in their team, along the way, we will further the business and manage as we can make the process easy and better.
          </p>
          <ImageBlock alt="Max Party Example" />
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">Gaming Night</h3>
          <p className="text-slate-300">
            Once our timeline team assessed that we would not get the scene right in less than the promised timeline, we set about for a new team. Across various iterations and rogue events.
          </p>
        </div>
      </div>
    </ContentSection>
  );
};

const ComponentsSection: React.FC = () => {
  const availableComponents: ComponentInfo[] = [
    {
      icon: <FaCode className="h-8 w-8" />,
      title: "Code Block",
      description: "Syntax highlighted code snippets"
    },
    {
      icon: <FaFileAlt className="h-8 w-8" />,
      title: "Content Block", 
      description: "Rich text content areas"
    },
    {
      icon: <FaBolt className="h-8 w-8" />,
      title: "Action Box",
      description: "Call-to-action components"
    },
    {
      icon: <FaPalette className="h-8 w-8" />,
      title: "Image Block",
      description: "Responsive image containers"
    },
    {
      icon: <FaLayerGroup className="h-8 w-8" />,
      title: "Feature List",
      description: "Numbered feature presentations"
    },
    {
      icon: <FaDesktop className="h-8 w-8" />,
      title: "Video Embed",
      description: "YouTube video integration"
    }
  ];

  return (
    <ContentSection title="Components">
      <CustomCard title="Available Components">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableComponents.map((component, index) => (
            <ComponentCard 
              key={index}
              icon={component.icon}
              title={component.title}
              description={component.description}
            />
          ))}
        </div>
      </CustomCard>
    </ContentSection>
  );
};

const AddPagesSection: React.FC = () => {
  const steps: string[] = [
    "Insert the new page and configure the identifier.",
    "Add the page to left menu using the common fields."
  ];

  return (
    <ContentSection 
      title="Add pages"
      author={{ name: "Damian Werst" }}
      createdDate="Sep 16, 2024"
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8">
        Adding pages using this sample site is achieved with a couple of distinct steps:
      </p>

      <StepList steps={steps} />

      <h3 className="text-2xl font-semibold mb-6 text-white">Insert a new page.</h3>

      <CustomCard className="mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-4 text-white">Add pages</h4>
            <div className="space-y-4">
              <div className="bg-purple-100 text-purple-800 p-3 rounded">
                <div className="flex items-center space-x-2">
                  <FaFileAlt className="h-4 w-4" />
                  <span className="text-sm">Page header</span>
                </div>
                <p className="text-xs mt-1">Add pages</p>
              </div>

              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-purple-100 text-purple-800 p-3 rounded">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-purple-300 rounded"></div>
                    <span className="text-sm">Image</span>
                  </div>
                  <p className="text-xs mt-1">Use the name "list" in your context to drag...</p>
                </div>
              ))}

              <Button variant="outline" className="w-full border-dashed border-slate-600 text-slate-400 hover:border-slate-500 hover:text-slate-300">
                + INSERT NEW SECTION
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <CustomButton variant="secondary" size="lg">
              + INSERT NEW PAGE
            </CustomButton>
          </div>
        </div>
      </CustomCard>

      <p className="text-slate-300 mb-8">
        Click on the "edit fields" link in the common fields section.
      </p>

      <CustomCard title="Presentation">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div>
            <h5 className="font-semibold mb-3 text-blue-400">Common fields</h5>
            <p className="text-sm text-blue-300">Values you can use globally. edit fields</p>
          </div>
          <div>
            <h5 className="font-semibold mb-3 text-white">Header</h5>
            <p className="text-sm text-slate-400">Edit your header content. edit fields</p>
          </div>
          <div>
            <h5 className="font-semibold mb-3 text-white">Footer</h5>
            <p className="text-sm text-slate-400">Edit your footer content. edit fields</p>
          </div>
        </div>

        <Separator className="my-6 bg-slate-700" />

        <h5 className="font-semibold mb-4 text-white">Pages</h5>
        <div className="flex gap-2 mb-4">
          {['ALL', 'ABOUT', 'DEPLOYMENT', 'GETTING STARTED', 'HEADLESSHOST'].map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs text-slate-500 border-slate-600">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-4">
              <h6 className="font-semibold mb-2 text-white">Introduction</h6>
              <div className="bg-purple-100 text-purple-800 p-2 rounded text-sm">
                <div className="flex items-center space-x-2">
                  <FaFileAlt className="h-3 w-3" />
                  <span className="text-xs">Page header</span>
                </div>
                <p className="text-xs mt-1">Introduction</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-4">
              <h6 className="font-semibold mb-2 text-white">Local deployment</h6>
              <div className="bg-purple-100 text-purple-800 p-2 rounded text-sm">
                <div className="flex items-center space-x-2">
                  <FaFileAlt className="h-3 w-3" />
                  <span className="text-xs">Page header</span>
                </div>
                <p className="text-xs mt-1">Local deployment</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </CustomCard>
    </ContentSection>
  );
};

// ===== NAVIGATION & LAYOUT COMPONENTS =====
const Header: React.FC<{
  onToggleSidebar: () => void;
}> = ({ onToggleSidebar }) => {
  return (
    <header className="bg-slate-950 border-b border-slate-800 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleSidebar}
            className="lg:hidden p-2 text-white hover:bg-slate-900"
          >
            <FaBars className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <FaBook className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-white">HEADLESSHOST</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              type="text"
              placeholder="Search..."
              className="bg-slate-900 border-slate-700 pl-10 pr-4 py-2 text-sm focus:border-purple-500 w-64 text-white placeholder:text-slate-400"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

const Sidebar: React.FC<{
  isOpen: boolean;
  navigationItems: NavigationSection[];
  activeSection: string;
  onSectionChange: (section: string) => void;
}> = ({ isOpen, navigationItems, activeSection, onSectionChange }) => {
  return (
    <aside className={`${isOpen ? 'w-64' : 'w-0'} transition-all duration-300 overflow-hidden bg-slate-950 border-r border-slate-800`}>
      <nav className="p-6">
        {navigationItems.map((section, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.id}>
                  <Button
                    variant="ghost"
                    onClick={() => onSectionChange(item.id)}
                    className={`w-full justify-start px-3 py-2 h-auto ${
                      activeSection === item.id
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'text-slate-300 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span className="text-sm">{item.label}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

// ===== MAIN DOCUMENTATION COMPONENT =====
const DocumentationPage: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState<string>('introduction');
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(true);

  const navigationItems: NavigationSection[] = [
    {
      title: 'Getting Started',
      items: [
        { id: 'introduction', label: 'Introduction', icon: <FaInfoCircle className="h-4 w-4" /> },
        { id: 'components', label: 'Components', icon: <FaLayerGroup className="h-4 w-4" /> }
      ]
    },
    {
      title: 'Deployment',
      items: [
        { id: 'local', label: 'Local', icon: <FaDesktop className="h-4 w-4" /> }
      ]
    },
    {
      title: 'Headlesshost',
      items: [
        { id: 'styling-setup', label: 'Styling setup', icon: <FaPalette className="h-4 w-4" /> },
        { id: 'add-content', label: 'Add content', icon: <FaFileAlt className="h-4 w-4" /> },
        { id: 'add-pages', label: 'Add pages', icon: <FaFileAlt className="h-4 w-4" /> },
        { id: 'create-sections', label: 'Create sections', icon: <FaLayerGroup className="h-4 w-4" /> }
      ]
    },
    {
      title: 'About',
      items: [
        { id: 'contact', label: 'Contact', icon: <FaUser className="h-4 w-4" /> }
      ]
    }
  ];

  const renderContent = (): React.ReactNode => {
    switch (activeSection) {
      case 'introduction':
        return <IntroductionSection />;
      case 'components':
        return <ComponentsSection />;
      case 'add-pages':
        return <AddPagesSection />;
      default:
        return (
          <ContentSection title={activeSection.replace('-', ' ').replace(/\w/g, l => l.toUpperCase())}>
            <CustomCard className="text-center p-8">
              <FaCog className="h-16 w-16 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400">This section is under development</p>
            </CustomCard>
          </ContentSection>
        );
    }
  };

  return (
    <div className="min-h-screen w-screen bg-slate-950 text-white font-['Open_Sans']">
      <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen}
          navigationItems={navigationItems}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        <main className="flex-1 p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default DocumentationPage;