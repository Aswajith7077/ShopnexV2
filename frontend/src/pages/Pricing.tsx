'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  FaCheck,
  FaChartLine,
  FaUserTie,
  FaShieldAlt,
  FaHeadset,
  FaMobile,
} from 'react-icons/fa';

// TypeScript interfaces
interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  period: string;
  popular: boolean;
  features: string[];
  buttonText: string;
}

interface TabsProps {
  children: React.ReactNode;
  defaultValue: string;
}

interface TabsListProps {
  children: React.ReactNode;
  activeTab?: string;
  onTabChange?: (value: string) => void;
}

interface TabsTriggerProps {
  children: React.ReactNode;
  value: string;
  activeTab?: string;
  onTabChange?: (value: string) => void;
}

interface TabsContentProps {
  children: React.ReactNode;
  value: string;
  activeTab?: string;
}

// Sample pricing data
const pricingData = {
  traders: [
    {
      id: 'basic',
      name: 'Basic',
      subtitle: 'Ideal for Solo Entrepreneurs',
      price: '$19',
      period: '/per month',
      popular: false,
      features: [
        'CARD RATES FROM',
        '2.5% for 3rd-party payment providers',
        'STANDOUT FEATURES',
        '5 inventory locations',
        '24/7 email support',
        'Basic global selling (1 market)',
        'POS Lite',
      ],
      buttonText: 'Start free trial',
    },
    {
      id: 'professional',
      name: 'Professional',
      subtitle: 'Ideal for small teams',
      price: '$49',
      period: '/per month',
      popular: true,
      features: [
        'CARD RATES FROM',
        '1.8% 3rd-party payment providers',
        'STANDOUT FEATURES',
        '20 inventory locations',
        '24/7 chat and email support',
        'Localized global selling (3 markets)',
        'Advanced analytics tools',
        'POS Lite',
      ],
      buttonText: 'Start free trial',
    },
    {
      id: 'advanced',
      name: 'Advanced',
      subtitle: 'Ideal for Scaling Teams',
      price: '$249',
      period: '/per month',
      popular: false,
      features: [
        'CARD RATES FROM',
        '1% 3rd-party payment providers',
        'STANDOUT FEATURES',
        'Unlimited inventory locations',
        '24/7 priority support',
        'Advanced localization (10 markets)',
        'Custom analytics dashboards',
        'POS Lite',
        '20 additional staff accounts',
      ],
      buttonText: 'Start free trial',
    },
  ],
  dealers: [
    {
      id: 'basic',
      name: 'Basic',
      subtitle: 'Ideal for Small Dealerships',
      price: '$199',
      period: '/per month',
      popular: false,
      features: [
        'INTEGRATION RATES FROM',
        '2.5% for 3rd-party integrations',
        'STANDOUT FEATURES',
        'Multi-user access (5 users)',
        'Basic inventory management',
        'Customer relationship tools',
        '24/7 phone support',
      ],
      buttonText: 'Start free trial',
    },
    {
      id: 'premium',
      name: 'Premium',
      subtitle: 'Ideal for Growing Teams',
      price: '$499',
      period: '/per month',
      popular: true,
      features: [
        'INTEGRATION RATES FROM',
        '1.8% for 3rd-party integrations',
        'STANDOUT FEATURES',
        'Unlimited user access',
        'Advanced inventory management',
        'CRM with automation',
        '24/7 priority support',
        'Advanced reporting',
        'API integrations',
        'White-label solutions',
      ],
      buttonText: 'Start free trial',
    },
  ],
};

// Billing Toggle Component
const BillingToggle = ({
  isYearly,
  onToggle,
}: {
  isYearly: boolean;
  onToggle: (yearly: boolean) => void;
}) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-12">
      <div className="bg-slate-800 rounded-lg p-1 flex items-center">
        <button
          onClick={() => onToggle(false)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            !isYearly
              ? 'bg-white text-black'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Monthly billing
        </button>
        <button
          onClick={() => onToggle(true)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            isYearly ? 'bg-white text-black' : 'text-slate-400 hover:text-white'
          }`}
        >
          Yearly billing
          <span className="ml-2 text-xs bg-cyan-600 text-white px-2 py-1 rounded-full">
            Save -20%
          </span>
        </button>
      </div>
    </div>
  );
};

// Feature List Component
const FeatureList = ({ features }: { features: string[] }) => {
  return (
    <div className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <div key={index}>
          {feature === 'CARD RATES FROM' ||
          feature === 'STANDOUT FEATURES' ||
          feature === 'INTEGRATION RATES FROM' ? (
            <div className="text-xs font-semibold text-slate-400 tracking-wider uppercase mt-4 mb-2">
              {feature}
            </div>
          ) : (
            <div className="flex items-start">
              <FaCheck className="w-4 h-4 text-cyan-600 mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-white">{feature}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Pricing Card Component
const PricingCard = ({
  plan,
  isYearly,
}: {
  plan: PricingPlan;
  isYearly: boolean;
}) => {
  const getAdjustedPrice = (price: string) => {
    if (!isYearly) return price;
    const numPrice = parseInt(price.replace('$', ''));
    return `$${Math.round(numPrice * 0.8)}`;
  };

  return (
    <div className=" bg-black">
      <Card
        className={`h-full bg-black rounded-4xl p-6 ${
          plan.popular ? 'border-cyan-600' : ''
        }`}
      >
        {plan.popular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <Badge>Most Popular</Badge>
          </div>
        )}

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
          <p className="text-sm text-slate-400">{plan.subtitle}</p>
        </div>

        <div className="mb-6">
          <span className="text-5xl font-bold text-white">
            {getAdjustedPrice(plan.price)}
          </span>
          <span className="text-slate-400 mx-3">{plan.period}</span>
        </div>

        <FeatureList features={plan.features} />

        <Button
          variant={plan.popular ? 'default' : 'secondary'}
          className="w-full py-7 rounded-lg"
        >
          {plan.buttonText}
        </Button>
      </Card>
    </div>
  );
};

// Tab Components
const Tabs = ({ children, defaultValue }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className="w-full">
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement<TabsListProps>, {
          activeTab,
          onTabChange: setActiveTab,
        })
      )}
    </div>
  );
};

const TabsList = ({ children, activeTab, onTabChange }: TabsListProps) => {
  return (
    <div className="inline-flex h-12 items-center justify-center rounded-lg bg-slate-800 p-1 text-slate-400 mb-8">
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement<TabsTriggerProps>, {
          activeTab,
          onTabChange,
        })
      )}
    </div>
  );
};

const TabsTrigger = ({
  children,
  value,
  activeTab,
  onTabChange,
}: TabsTriggerProps) => {
  const isActive = activeTab === value;

  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-2 text-sm font-medium transition-all ${
        isActive
          ? 'bg-slate-950 text-white shadow-sm'
          : 'hover:bg-slate-700 hover:text-white'
      }`}
      onClick={() => onTabChange?.(value)}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ children, value, activeTab }: TabsContentProps) => {
  if (activeTab !== value) return null;
  return <div className="mt-6">{children}</div>;
};

// Main Subscription Component
const SubscriptionsPage = () => {
  //   const [activeTab, setActiveTab] = useState('traders')
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen w-screen bg-black text-white font-[Open_Sans] px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-white">
            Get started for free today
          </h1>
          <h2 className="text-4xl font-bold mb-6 text-white">
            unlock{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              only $1
            </span>{' '}
            for your first month
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            Discover the perfect plan for your needs—switch plans as your
            business grows.
          </p>

          <div className="flex items-center justify-center mb-4">
            <FaShieldAlt className="w-4 h-4 text-slate-400 mr-2" />
            <span className="text-sm text-slate-400">Pricing & Plans</span>
          </div>

          <BillingToggle isYearly={isYearly} onToggle={setIsYearly} />
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <Tabs defaultValue="traders">
            <TabsList>
              <TabsTrigger value="traders">
                <FaChartLine className="w-4 h-4 mr-2" />
                For Traders
              </TabsTrigger>
              <TabsTrigger value="dealers">
                <FaUserTie className="w-4 h-4 mr-2" />
                For Dealers
              </TabsTrigger>
            </TabsList>

            <TabsContent value="traders">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-90hm mx-auto">
                {pricingData.traders.map((plan) => (
                  <PricingCard key={plan.id} plan={plan} isYearly={isYearly} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="dealers">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {pricingData.dealers.map((plan) => (
                  <PricingCard key={plan.id} plan={plan} isYearly={isYearly} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-slate-400 mb-6">
            All plans include 24/7 customer support and a 30-day money-back
            guarantee
          </p>
          <div className="flex justify-center items-center gap-8 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <FaShieldAlt className="w-4 h-4" />
              Secure & Encrypted
            </span>
            <span className="flex items-center gap-2">
              <FaHeadset className="w-4 h-4" />
              24/7 Support
            </span>
            <span className="flex items-center gap-2">
              <FaMobile className="w-4 h-4" />
              Mobile Optimized
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionsPage;
