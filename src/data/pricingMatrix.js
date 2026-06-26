export const pricingMatrix = {
  currencies: {
    INR: { symbol: '₹', rate: 83.0, suffix: '/mo' },
    USD: { symbol: '$', rate: 1.0, suffix: '/mo' },
    EUR: { symbol: '€', rate: 0.92, suffix: '/mo' }
  },
  billing: {
    monthly: { discount: 1.0, label: 'billed monthly' },
    annual: { discount: 0.8, label: 'billed annually (save 20%)' }
  },
  tiers: {
    starter: {
      id: 'starter',
      name: 'Starter Agent',
      base: 29,
      description: 'Ideal for early-stage teams and automated reporting workflows.',
      features: [
        'Up to 5 data pipelines',
        'Basic automated cleaning & ETL',
        'Standard 3-hour agent frequency',
        'Email & Slack notifications',
        'CSV/JSON/Parquet export formats'
      ]
    },
    professional: {
      id: 'professional',
      name: 'Scale Architect',
      base: 79,
      description: 'Our most popular tier. Built for high-volume pipelines and automated operations.',
      features: [
        'Unlimited data pipelines',
        'Advanced vector cleaning & mapping',
        'Real-time streaming agent (5m delay)',
        'Priority API & webhook execution',
        '24/7 dedicated system support'
      ]
    },
    enterprise: {
      id: 'enterprise',
      name: 'Aethera Core',
      base: 199,
      description: 'Uncapped power. Tailored pipelines, isolated compute nodes, and custom LLM deployments.',
      features: [
        'Uncapped compute node concurrency',
        'Custom local model deployments',
        'Instantaneous sub-second agent triggers',
        'Strict SOC-2 compliance sandbox',
        'Dedicated Solutions Architect support'
      ]
    }
  }
};
