'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Section } from '@/components/section';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import * as motion from 'motion/react-client';
import { AnimatePresence } from 'motion/react';
import useMeasure from 'react-use-measure';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import { DotPattern } from '@/components/ui/dot-pattern';
import { Bar, BarChart, XAxis, YAxis, Pie, PieChart, Cell } from 'recharts';
import { Checkbox } from '@/components/ui/checkbox';
import { TableCell } from '@/components/ui/table';
import {
  Bell,
  Building2,
  Calendar,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  Command,
  Database,
  DollarSign,
  FileBarChart,
  FileText,
  Filter,
  GitBranch,
  Globe,
  Grip,
  Hash,
  Heart,
  Kanban,
  LayoutGrid,
  Link as LinkIcon,
  Mail,
  MessageSquare,
  MoreVertical,
  Plus,
  RefreshCw,
  Search,
  Settings,
  Share2,
  Sparkles,
  Target,
  ToggleRight,
  TrendingUp,
  User,
  Users,
  Workflow,
  Zap,
} from 'lucide-react';

// Sidebar Navigation Item
function SidebarItem({
  icon: Icon,
  label,
  active = false,
  badge,
  shortcut,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  badge?: string;
  shortcut?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex w-full items-center gap-3 rounded-md p-1 text-sm transition-colors',
        active
          ? 'bg-muted text-foreground font-medium'
          : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
      )}
    >
      <Icon className="size-4 shrink-0" />
      <span className="flex-1 truncate text-left">{label}</span>
      {badge && (
        <Badge variant="secondary" className="h-5 px-1.5 text-xs">
          {badge}
        </Badge>
      )}
      {shortcut && (
        <span className="text-xs text-muted-foreground">{shortcut}</span>
      )}
    </button>
  );
}

// Sidebar Section Header
function SidebarSection({
  title,
  children,
  collapsible = false,
}: {
  title: string;
  children: React.ReactNode;
  collapsible?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="py-2">
      <button
        onClick={() => collapsible && setIsOpen(!isOpen)}
        className={cn(
          'flex w-full items-center gap-2 px-3 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider',
          collapsible && 'hover:text-foreground cursor-pointer'
        )}
      >
        {collapsible && (
          <ChevronRight
            className={cn(
              'size-3 transition-transform',
              isOpen && 'rotate-90'
            )}
          />
        )}
        {title}
      </button>
      {isOpen && <div className="mt-1 space-y-0.5">{children}</div>}
    </div>
  );
}

// Sidebar Component
function Sidebar({
  activeTab,
  onTabChange,
}: {
  activeTab: string;
  onTabChange: (tab: string) => void;
}) {
  return (
    <div className="hidden lg:flex w-[200px] xl:w-[210px] flex-col border-r bg-card/50 h-full">
      {/* Header */}
      <div className="flex items-center gap-2 border-b px-4 py-3">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-7 w-auto object-contain"
        />
        <ChevronDown className="ml-auto size-4 text-muted-foreground" />
      </div>

      {/* Quick Actions */}
      <div className="border-b px-3 py-2.5">
        <div className="flex items-center gap-2 rounded-md border bg-background px-2.5 py-1.5 text-xs text-muted-foreground">
          <Command className="size-3.5" />
          <span>Quick actions</span>
          <span className="ml-auto text-[10px] border rounded px-1 py-0.5">⌘K</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-2 py-2 scrollbar-hide">
        {/* Main Navigation */}
        <div className="space-y-0.5">
          <SidebarItem icon={Bell} label="Notifications" />
          <SidebarItem icon={FileText} label="Tasks" />
          <SidebarItem icon={Mail} label="Messages" />
          <SidebarItem icon={FileBarChart} label="Reports" />
        </div>

        {/* Agents Section */}
        <SidebarSection title="Agents" collapsible>
          <SidebarItem
            icon={Workflow}
            label="Agent Workflows"
            active={activeTab === 'workflows'}
            onClick={() => onTabChange('workflows')}
          />
          <SidebarItem icon={Zap} label="Triggers" />
        </SidebarSection>

        {/* Deployments Section */}
        <SidebarSection title="Deployments" collapsible>
          <SidebarItem
            icon={Kanban}
            label="Active Agents"
            active={activeTab === 'pipeline'}
            onClick={() => onTabChange('pipeline')}
          />
          <SidebarItem icon={LayoutGrid} label="Agent Templates" />
          <SidebarItem icon={GitBranch} label="Version Control" />
        </SidebarSection>

        {/* Data Section */}
        <SidebarSection title="Data" collapsible>
          <SidebarItem
            icon={Building2}
            label="Integrations"
            active={activeTab === 'data'}
            onClick={() => onTabChange('data')}
          />
          <SidebarItem icon={Users} label="Team" />
          <SidebarItem
            icon={TrendingUp}
            label="Analytics"
            active={activeTab === 'reporting'}
            onClick={() => onTabChange('reporting')}
          />
          <SidebarItem icon={Grip} label="Workspaces" />
          <SidebarItem icon={Heart} label="Favorites" />
          <SidebarItem icon={FileText} label="Logs" />
        </SidebarSection>
      </div>

      {/* Bottom Search */}
      <div className="border-t px-3 py-2.5">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Search className="size-3.5" />
          <span>Search</span>
          <span className="ml-auto text-[10px]">/</span>
        </div>
      </div>
    </div>
  );
}

// Animated Table Row Component
function AnimatedTableRow({
  company,
  index,
}: {
  company: {
    id: number;
    name: string;
    logo: string;
    logoColor: string;
    domains: string;
    associatedDeals: number;
    icpFit: string;
    icpColor: string;
    estimatedArr: string;
    connection: string;
  };
  index: number;
}) {
  return (
    <motion.tr
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: index * 0.04,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="hover:bg-muted/30 cursor-pointer border-b transition-colors"
    >
      <TableCell className="py-2 px-2 w-8">
        <Checkbox className="translate-y-[2px] size-3.5" />
      </TableCell>
      <TableCell className="py-2">
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.25,
              delay: index * 0.04 + 0.08,
              type: 'spring',
              stiffness: 200,
            }}
            className="size-5 rounded-sm flex items-center justify-center shrink-0 text-[8px] font-bold bg-foreground text-background"
          >
            {company.logo}
          </motion.div>
          <span className="font-medium text-xs">{company.name}</span>
        </div>
      </TableCell>
      <TableCell className="py-2">
        <span className="text-xs text-muted-foreground">
          {company.domains}
        </span>
      </TableCell>
      <TableCell className="py-2 bg-muted/30">
        <Badge variant="secondary" className="text-[10px] h-5 px-2 bg-muted text-foreground">
          {company.associatedDeals} agents
        </Badge>
      </TableCell>
      <TableCell className="py-2">
        <span className="text-xs text-muted-foreground">
          {company.icpFit}
        </span>
      </TableCell>
      <TableCell className="py-2">
        <span className="text-xs text-muted-foreground">
          {company.estimatedArr}
        </span>
      </TableCell>
      <TableCell className="py-2">
        <div className="flex items-center gap-1.5">
          <span className={cn(
            'size-2 rounded-full bg-foreground/40'
          )} />
          <span className="text-xs text-muted-foreground capitalize">
            {company.connection}
          </span>
        </div>
      </TableCell>
    </motion.tr>
  );
}

// Animated Table Header Column
function AnimatedTableHead({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.th
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.25,
        delay,
        ease: 'easeOut',
      }}
      className={cn(
        'h-9 px-3 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className
      )}
    >
      {children}
    </motion.th>
  );
}

// Data Tab - Integrations Table View
function DataTab() {
  const [ref, bounds] = useMeasure();

  const companies = [
    {
      id: 1,
      name: 'Salesforce',
      logo: 'SF',
      logoColor: 'bg-blue-500 text-white',
      domains: 'CRM',
      associatedDeals: 4,
      icpFit: 'Active',
      icpColor: 'green',
      estimatedArr: '2.4M events',
      connection: 'strong',
    },
    {
      id: 2,
      name: 'HubSpot',
      logo: 'HS',
      logoColor: 'bg-orange-500 text-white',
      domains: 'Marketing',
      associatedDeals: 3,
      icpFit: 'Active',
      icpColor: 'green',
      estimatedArr: '1.8M events',
      connection: 'strong',
    },
    {
      id: 3,
      name: 'Slack',
      logo: 'SL',
      logoColor: 'bg-purple-600 text-white',
      domains: 'Communication',
      associatedDeals: 5,
      icpFit: 'Active',
      icpColor: 'green',
      estimatedArr: '4.2M events',
      connection: 'strong',
    },
    {
      id: 4,
      name: 'Zendesk',
      logo: 'ZD',
      logoColor: 'bg-green-600 text-white',
      domains: 'Support',
      associatedDeals: 2,
      icpFit: 'Active',
      icpColor: 'green',
      estimatedArr: '890K events',
      connection: 'strong',
    },
    {
      id: 5,
      name: 'Notion',
      logo: 'N',
      logoColor: 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-black',
      domains: 'Docs',
      associatedDeals: 1,
      icpFit: 'Syncing',
      icpColor: 'yellow',
      estimatedArr: '340K events',
      connection: 'medium',
    },
    {
      id: 6,
      name: 'GitHub',
      logo: 'GH',
      logoColor: 'bg-neutral-800 text-white dark:bg-neutral-200 dark:text-black',
      domains: 'DevOps',
      associatedDeals: 6,
      icpFit: 'Active',
      icpColor: 'green',
      estimatedArr: '5.1M events',
      connection: 'strong',
    },
    {
      id: 7,
      name: 'Stripe',
      logo: 'ST',
      logoColor: 'bg-indigo-600 text-white',
      domains: 'Payments',
      associatedDeals: 3,
      icpFit: 'Active',
      icpColor: 'green',
      estimatedArr: '1.2M events',
      connection: 'strong',
    },
    {
      id: 8,
      name: 'Twilio',
      logo: 'TW',
      logoColor: 'bg-red-500 text-white',
      domains: 'SMS/Voice',
      associatedDeals: 2,
      icpFit: 'Syncing',
      icpColor: 'yellow',
      estimatedArr: '780K events',
      connection: 'medium',
    },
    {
      id: 9,
      name: 'AWS',
      logo: 'AW',
      logoColor: 'bg-amber-500 text-black',
      domains: 'Cloud',
      associatedDeals: 4,
      icpFit: 'Active',
      icpColor: 'green',
      estimatedArr: '3.8M events',
      connection: 'strong',
    },
    {
      id: 10,
      name: 'Jira',
      logo: 'JR',
      logoColor: 'bg-blue-600 text-white',
      domains: 'Project Mgmt',
      associatedDeals: 1,
      icpFit: 'Paused',
      icpColor: 'red',
      estimatedArr: '120K events',
      connection: 'weak',
    },
    {
      id: 11,
      name: 'Google',
      logo: 'G',
      logoColor: 'bg-blue-500 text-white',
      domains: 'Productivity',
      associatedDeals: 6,
      icpFit: 'Active',
      icpColor: 'green',
      estimatedArr: '6.2M events',
      connection: 'strong',
    },
    {
      id: 12,
      name: 'Shopify',
      logo: 'SH',
      logoColor: 'bg-green-500 text-white',
      domains: 'E-commerce',
      associatedDeals: 4,
      icpFit: 'Active',
      icpColor: 'green',
      estimatedArr: '2.1M events',
      connection: 'strong',
    },
    {
      id: 13,
      name: 'MongoDB',
      logo: 'MG',
      logoColor: 'bg-emerald-600 text-white',
      domains: 'Database',
      associatedDeals: 3,
      icpFit: 'Active',
      icpColor: 'green',
      estimatedArr: '1.6M events',
      connection: 'strong',
    },
    {
      id: 14,
      name: 'Datadog',
      logo: 'DD',
      logoColor: 'bg-violet-600 text-white',
      domains: 'Monitoring',
      associatedDeals: 2,
      icpFit: 'Active',
      icpColor: 'green',
      estimatedArr: '920K events',
      connection: 'strong',
    },
    {
      id: 15,
      name: 'Linear',
      logo: 'LN',
      logoColor: 'bg-indigo-500 text-white',
      domains: 'Issues',
      associatedDeals: 3,
      icpFit: 'Active',
      icpColor: 'green',
      estimatedArr: '1.4M events',
      connection: 'strong',
    },
    {
      id: 16,
      name: 'Intercom',
      logo: 'IC',
      logoColor: 'bg-blue-400 text-white',
      domains: 'Chat',
      associatedDeals: 2,
      icpFit: 'Syncing',
      icpColor: 'yellow',
      estimatedArr: '580K events',
      connection: 'medium',
    },
  ];

  const columnHeaders = [
    { icon: Building2, label: 'Integration', color: 'text-muted-foreground', bg: '', width: 'min-w-[140px]' },
    { icon: LinkIcon, label: 'Category', color: 'text-muted-foreground', bg: '', width: 'min-w-[120px]' },
    { icon: TrendingUp, label: 'Agents', color: 'text-foreground', bg: 'bg-muted/30', width: 'min-w-[80px]' },
    { icon: Target, label: 'Status', color: 'text-muted-foreground', bg: '', width: 'min-w-[80px]' },
    { icon: DollarSign, label: 'Events', color: 'text-muted-foreground', bg: '', width: 'min-w-[100px]' },
    { icon: Users, label: 'Health', color: 'text-muted-foreground', bg: '', width: 'min-w-[90px]' },
  ];

  return (
    <div className="flex flex-col h-full gap-3">
      {/* Top Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between shrink-0"
      >
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-2 text-xs">
            <Building2 className="size-3.5" />
            Integrations
            <ChevronDown className="size-3" />
          </Button>
          <Badge variant="secondary" className="h-6 text-xs">
            16 connected
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-2 text-xs">
            <Settings className="size-3.5" />
            <span className="hidden sm:inline">Configure</span>
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-2 text-xs">
            Add Integration
            <ChevronDown className="size-3" />
          </Button>
        </div>
      </motion.div>

      {/* Filters Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="flex flex-wrap items-center gap-2 shrink-0"
      >
        <Button variant="outline" size="sm" className="h-7 gap-1.5 text-xs">
          <Filter className="size-3" />
          Sorted by Name
        </Button>
        <Button variant="outline" size="sm" className="h-7 gap-1.5 text-xs">
          Filter by category
          <Badge variant="secondary" className="ml-1 size-4 p-0 justify-center text-[10px]">2</Badge>
        </Button>
        <div className="h-4 w-px bg-border" />
        <Button variant="outline" size="sm" className="h-7 gap-1.5 text-xs">
          <Target className="size-3" />
          Status
        </Button>
        <span className="text-xs text-muted-foreground">is not</span>
        <Badge variant="outline" className="gap-1 h-6 text-xs">
          <span className="size-1.5 rounded-full bg-foreground/50" />
          Disconnected
        </Badge>
        <Button variant="ghost" size="sm" className="h-7 px-2">
          <Plus className="size-3.5" />
        </Button>
      </motion.div>

      {/* Table with smooth height animation and hidden scrollbar */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{
          opacity: 1,
          scale: 1,
          height: bounds.height > 0 ? 'auto' : undefined
        }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="flex-1 min-h-0 overflow-auto rounded-lg border bg-card scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <table className="w-full caption-bottom text-sm">
          <thead className="[&_tr]:border-b">
            <tr className="hover:bg-transparent border-b">
              <AnimatedTableHead className="w-8 bg-muted/30 px-2" delay={0}>
                <Checkbox className="translate-y-[2px] size-3.5" />
              </AnimatedTableHead>
              {columnHeaders.map((col, i) => (
                <AnimatedTableHead
                  key={col.label}
                  className={cn(col.bg, col.width)}
                  delay={0.03 * (i + 1)}
                >
                  <div className="flex items-center gap-1.5 text-xs font-medium">
                    <col.icon className={cn('size-3.5', col.color)} />
                    {col.label}
                  </div>
                </AnimatedTableHead>
              ))}
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            <AnimatePresence>
              {companies.map((company, index) => (
                <AnimatedTableRow
                  key={company.id}
                  company={company}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}

// Workflow Node Component matching Basepoint style
function WorkflowNode({
  icon: Icon,
  title,
  subtitle,
  badge,
  status,
  isFirst = false,
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  badge?: string;
  status?: 'triggered' | 'completed';
  isFirst?: boolean;
}) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Status badge above node */}
      {status && (
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium bg-muted text-foreground">
          {status === 'completed' && <Check className="size-3" />}
          {status === 'triggered' ? '● Triggered' : '✓ Completed'}
        </div>
      )}

      {/* Node card */}
      <div className={cn(
        'relative rounded-lg border bg-card p-3 shadow-sm min-w-[200px]',
        isFirst && 'border-dashed border-muted-foreground/50'
      )}>
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded bg-muted flex items-center justify-center">
              <Icon className="size-3.5 text-muted-foreground" />
            </div>
            <span className="font-medium text-sm">{title}</span>
          </div>
          {badge && (
            <Badge
              variant="outline"
              className="text-[10px] h-5 border-0 bg-muted text-foreground"
            >
              {badge}
            </Badge>
          )}
        </div>
        <p className="text-xs text-muted-foreground pl-8">{subtitle}</p>

        {/* Connection point at bottom */}
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 size-3 rounded-full border-2 border-background bg-muted" />
      </div>
    </div>
  );
}

// Workflows Tab with dot-pattern glow effect
function WorkflowsTab() {
  const runHistory = [
    { id: 70, records: 15, time: 'Completed just now', status: 'success' },
    { id: 69, records: 15, time: 'Completed just now', status: 'success' },
    { id: 68, records: 11, time: 'Completed 2 min ago', status: 'success' },
    { id: 67, records: 11, time: 'Completed 3 min ago', status: 'success' },
    { id: 66, records: 16, time: 'Completed 5 min ago', status: 'success' },
    { id: 65, records: 14, time: 'Completed 6 min ago', status: 'success' },
  ];

  return (
    <div className="flex h-full gap-3">
      {/* Left: Workflow Title Bar */}
      <div className="flex-1 flex flex-col rounded-lg border bg-card overflow-hidden">
        {/* Top bar with workflow name */}
        <div className="flex items-center justify-between border-b px-4 py-2.5 bg-card shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm">
              <Workflow className="size-4 text-muted-foreground" />
              <span className="font-medium">Agent Workflows</span>
              <span className="text-muted-foreground">/</span>
              <span>Auto-classify support tickets</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-7 gap-1.5 text-xs">
              <Share2 className="size-3.5" />
              Share
            </Button>
          </div>
        </div>

        {/* Tabs: Editor / Runs */}
        <div className="flex items-center border-b px-4 shrink-0">
          <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium border-b-2 border-foreground -mb-px">
            <Settings className="size-3.5" />
            Editor
          </button>
          <button className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground">
            <RefreshCw className="size-3.5" />
            Runs
            <Badge variant="secondary" className="h-5 px-1.5 text-[10px]">70</Badge>
          </button>
          <div className="ml-auto flex items-center gap-2 py-2">
            <span className="flex items-center gap-1.5 text-xs text-foreground">
              <span className="size-2 rounded-full bg-foreground" />
              Live
            </span>
            <ToggleRight className="size-5 text-foreground" />
          </div>
        </div>

        {/* Workflow Canvas with dot pattern */}
        <div className="flex-1 relative overflow-hidden">
          {/* Dot pattern background with glow */}
          <DotPattern
            width={20}
            height={20}
            cx={1}
            cy={1}
            cr={1}
            glow={true}
            className="text-muted-foreground/30 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"
          />

          {/* Run indicator */}
          <div className="absolute top-4 left-4">
            <Badge variant="outline" className="bg-muted text-foreground border-border">
              Run #70
            </Badge>
          </div>

          {/* Workflow nodes */}
          <div className="relative flex flex-col items-center justify-center py-8 gap-4 h-full">
            {/* Trigger Node */}
            <div className="flex flex-col items-center">
              <Badge variant="outline" className="mb-2 text-[10px] bg-muted/50">⚡ Trigger</Badge>
              <WorkflowNode
                icon={Database}
                title="Webhook received"
                subtitle="New ticket from Zendesk"
                badge="Event"
                status="triggered"
                isFirst
              />
            </div>

            {/* Connection line */}
            <div className="h-8 w-px bg-border relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-muted border-2 border-background" />
            </div>

            {/* Research Node */}
            <WorkflowNode
              icon={Sparkles}
              title="AI Classification"
              subtitle="Analyze ticket content & sentiment"
              badge=":: Agent"
              status="completed"
            />

            {/* Connection line */}
            <div className="h-8 w-px bg-border relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-muted border-2 border-background" />
            </div>

            {/* Switch Node */}
            <WorkflowNode
              icon={GitBranch}
              title="Route ticket"
              subtitle="Based on priority & category"
              badge="Decision"
              status="completed"
            />

            {/* Branch connections */}
            <div className="flex items-start gap-16 mt-2">
              <div className="flex flex-col items-center">
                <div className="h-4 w-px bg-border" />
                <span className="text-[10px] text-muted-foreground px-2 py-0.5 rounded bg-muted/50">High Priority</span>
                <div className="text-[10px] text-foreground mt-1">✓ Routed</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-4 w-px bg-border" />
                <span className="text-[10px] text-muted-foreground px-2 py-0.5 rounded bg-muted/50">Medium</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-4 w-px bg-border" />
                <span className="text-[10px] text-muted-foreground px-2 py-0.5 rounded bg-muted/50">Auto-reply</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Run History Panel */}
      <div className="hidden lg:flex w-64 flex-col rounded-lg border bg-card overflow-hidden">
        <div className="p-3 border-b shrink-0">
          <h3 className="font-semibold text-sm">Run History</h3>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-hide p-2 space-y-1">
          {runHistory.map((run, i) => (
            <div
              key={run.id}
              className={cn(
                'flex items-center justify-between rounded-md p-2.5 text-xs cursor-pointer transition-colors',
                i === 0 ? 'bg-muted' : 'hover:bg-muted/50'
              )}
            >
              <div className="flex items-center gap-2">
                <Check className="size-4 text-foreground" />
                <span className="font-medium">Run #{run.id}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="size-3" />
                  {run.records}
                </span>
                <span className="text-[10px]">{run.time.replace('Completed ', '')}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Overview section */}
        <div className="border-t p-3 shrink-0">
          <h4 className="text-xs font-medium text-muted-foreground mb-2">Overview</h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-md bg-muted/50 p-2">
              <div className="text-lg font-bold text-foreground">70</div>
              <div className="text-[10px] text-muted-foreground">Completed</div>
            </div>
            <div className="rounded-md bg-muted/50 p-2">
              <div className="text-lg font-bold">0</div>
              <div className="text-[10px] text-muted-foreground">Failed</div>
            </div>
            <div className="rounded-md bg-muted/50 p-2">
              <div className="text-lg font-bold">0</div>
              <div className="text-[10px] text-muted-foreground">In progress</div>
            </div>
            <div className="rounded-md bg-muted/50 p-2">
              <div className="text-lg font-bold">17<span className="text-xs font-normal text-muted-foreground">s</span></div>
              <div className="text-[10px] text-muted-foreground">Avg. runtime</div>
            </div>
          </div>
          <div className="mt-2 p-2 rounded-md bg-muted/50">
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold">911</span>
              <span className="text-[10px] text-muted-foreground">credits consumed</span>
            </div>
            <div className="text-[10px] text-muted-foreground">1,000 included</div>
            <div className="mt-1 h-1.5 rounded-full bg-muted overflow-hidden">
              <div className="h-full w-[91%] rounded-full bg-foreground" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Chart configurations for ReportingTab - black and white theme
const barChartConfig = {
  aprJun: { label: 'Q1', color: '#E5E5E5' },
  julSep: { label: 'Q2', color: '#D4D4D4' },
  plus: { label: 'Support', color: '#A3A3A3' },
  pro: { label: 'Sales', color: '#525252' },
  enterprise: { label: 'Marketing', color: '#262626' },
} satisfies ChartConfig;

const pieChartConfig = {
  icp: { label: 'Support', color: '#171717' },
  vc: { label: 'Sales', color: '#404040' },
  sp: { label: 'Marketing', color: '#737373' },
  tts: { label: 'DevOps', color: '#A3A3A3' },
  other1: { label: 'HR', color: '#D4D4D4' },
  other2: { label: 'Other', color: '#E5E5E5' },
} satisfies ChartConfig;

// Reporting Tab - Agent Analytics
function ReportingTab() {
  // Bar chart data - Agent executions by category
  const barChartData = [
    { month: 'Week1', aprJun: 0.4, julSep: 0.3, plus: 0.5, pro: 0.6, enterprise: 0 },
    { month: 'Week12', aprJun: 0.5, julSep: 0.4, plus: 0.6, pro: 0.8, enterprise: 0 },
    { month: 'Week13', aprJun: 0.6, julSep: 0.5, plus: 0.7, pro: 1.2, enterprise: 0 },
    { month: 'Week14', aprJun: 0.4, julSep: 0.3, plus: 0.5, pro: 1.6, enterprise: 0 },
    { month: 'Week2', aprJun: 0.5, julSep: 0.4, plus: 0.6, pro: 0.8, enterprise: 0 },
    { month: 'Week22', aprJun: 0.6, julSep: 0.5, plus: 0.8, pro: 2.0, enterprise: 0 },
    { month: 'Week23', aprJun: 0.7, julSep: 0.6, plus: 0.9, pro: 1.4, enterprise: 0 },
    { month: 'Week24', aprJun: 0.5, julSep: 0.4, plus: 0.7, pro: 2.8, enterprise: 0 },
    { month: 'Week3', aprJun: 0.6, julSep: 0.5, plus: 0.8, pro: 1.6, enterprise: 0 },
    { month: 'Week32', aprJun: 0.7, julSep: 0.6, plus: 0.9, pro: 1.2, enterprise: 0 },
    { month: 'Week33', aprJun: 0.5, julSep: 0.4, plus: 0.7, pro: 1.0, enterprise: 0 },
    { month: 'Week34', aprJun: 0.6, julSep: 0.5, plus: 0.8, pro: 0.9, enterprise: 0 },
  ];

  // Pie chart data - Agent distribution by department
  const pieChartData = [
    { type: 'icp', value: 35, fill: '#171717' },
    { type: 'vc', value: 25, fill: '#404040' },
    { type: 'sp', value: 15, fill: '#737373' },
    { type: 'tts', value: 10, fill: '#A3A3A3' },
    { type: 'other1', value: 8, fill: '#D4D4D4' },
    { type: 'other2', value: 7, fill: '#E5E5E5' },
  ];

  return (
    <div className="flex flex-col h-full gap-4 overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h2 className="text-xl font-semibold">Agent Analytics</h2>
          <p className="text-sm text-muted-foreground">Monitor agent performance, task completion rates, and automation metrics.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-2 text-xs">
            <RefreshCw className="size-3.5" />
            Refresh data
          </Button>
          <Button size="sm" className="h-8 gap-2 text-xs">
            <Plus className="size-3.5" />
            Add report
          </Button>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-5 gap-4 min-h-0">
        {/* Agent Executions Bar Chart - Takes 3 columns */}
        <Card className="lg:col-span-3 border flex flex-col">
          <CardContent className="p-4 flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-4 shrink-0">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-sm">Agent executions by department</h3>
                <Badge variant="outline" className="text-[10px] h-5 gap-1">
                  <LayoutGrid className="size-3" />
                  All Agents
                </Badge>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-4 mb-4 text-xs shrink-0">
              <div className="flex items-center gap-1.5">
                <div className="size-2.5 rounded-full bg-neutral-200" />
                <span className="text-muted-foreground">Q1</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="size-2.5 rounded-full bg-neutral-300" />
                <span className="text-muted-foreground">Q2</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="size-2.5 rounded-full bg-neutral-400" />
                <span>Support</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="size-2.5 rounded-full bg-neutral-600" />
                <span>Sales</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="size-2.5 rounded-full bg-neutral-800" />
                <span>Marketing</span>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="flex-1 min-h-0">
              <ChartContainer config={barChartConfig} className="h-full w-full">
                <BarChart data={barChartData} barGap={0} barCategoryGap="15%" barSize={10}>
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 10 }}
                    tickFormatter={(value) => {
                      if (value === 'Week1') return 'Week 1';
                      if (value === 'Week2') return 'Week 2';
                      if (value === 'Week3') return 'Week 3';
                      return '';
                    }}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 10 }}
                    tickFormatter={(value) => `${value}K`}
                    domain={[0, 2.8]}
                    ticks={[0.4, 0.8, 1.2, 1.6, 2.0, 2.4, 2.8]}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="aprJun" fill="#E5E5E5" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="julSep" fill="#D4D4D4" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="plus" fill="#A3A3A3" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="pro" fill="#525252" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="enterprise" fill="#262626" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </div>

            {/* Agent Stats Tooltip Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 bg-card border rounded-lg shadow-lg p-3 pointer-events-none hidden lg:block">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-sm">Task Completion</span>
                <Badge className="bg-muted text-foreground text-[10px] h-5">
                  ↗ +63%
                </Badge>
              </div>
              <div className="space-y-1 text-xs">
                <div>
                  <span className="text-muted-foreground">This Week</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Agent Type</span>
                  <Badge variant="outline" className="text-[10px] h-4">Sales</Badge>
                </div>
                <div>
                  <span className="text-muted-foreground">Tasks Completed</span>
                  <span className="ml-2 font-semibold">2,493 tasks</span>
                </div>
                <div className="pt-2 border-t mt-2">
                  <span className="text-muted-foreground">Last Week</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Agent Type</span>
                  <Badge variant="outline" className="text-[10px] h-4">Sales</Badge>
                </div>
                <div>
                  <span className="text-muted-foreground">Tasks Completed</span>
                  <span className="ml-2">1,528 tasks</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pie Chart - Takes 2 columns */}
        <Card className="lg:col-span-2 border flex flex-col">
          <CardContent className="p-4 flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-4 shrink-0">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-sm">Active agents by department</h3>
                <Badge variant="outline" className="text-[10px] h-5 gap-1">
                  <TrendingUp className="size-3" />
                  Agents
                </Badge>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-3 mb-4 text-xs shrink-0">
              <div className="flex items-center gap-1.5">
                <div className="size-2.5 rounded-full bg-neutral-900 dark:bg-neutral-100" />
                <span>Support</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="size-2.5 rounded-full bg-neutral-600" />
                <span>Sales</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="size-2.5 rounded-full bg-neutral-500" />
                <span>Marketing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="size-2.5 rounded-full bg-neutral-400" />
                <span>DevOps</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="size-2.5 rounded-full bg-neutral-300" />
                <span className="text-muted-foreground">+2 more</span>
              </div>
            </div>

            {/* Pie Chart */}
            <div className="flex-1 flex items-center justify-center min-h-0">
              <ChartContainer config={pieChartConfig} className="h-full w-full max-h-[280px]">
                <PieChart>
                  <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                  <Pie
                    data={pieChartData}
                    dataKey="value"
                    nameKey="type"
                    cx="50%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={110}
                    strokeWidth={2}
                    stroke="hsl(var(--background))"
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                </PieChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Kanban Deal Card for Pipeline
function KanbanDealCard({
  id: _id,
  company,
  logo,
  contact,
  contactAvatar,
  value,
  employees,
  plan,
  date,
  files,
  comments,
  days,
  isDragging = false,
}: {
  id: string;
  company: string;
  logo: string;
  contact: string;
  contactAvatar?: string;
  value: string;
  employees: number;
  plan: string;
  date: string;
  files: number;
  comments: number;
  days?: string;
  isDragging?: boolean;
}) {
  return (
    <Card className={cn(
      'border bg-card cursor-grab active:cursor-grabbing transition-all shadow-none rounded-sm',
    )}>
      <CardContent className="p-3 space-y-2">
        {/* Company Header */}
        <div className="flex items-center gap-2">
          <div className="size-5 rounded bg-muted flex items-center justify-center text-[10px] font-semibold shrink-0">
            {logo}
          </div>
          <span className="font-medium text-xs truncate flex-1">{company}</span>
          <MoreVertical className="size-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Company Info Rows */}
        <div className="space-y-1.5">
          {/* Brand Row */}
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
            <Sparkles className="size-3 shrink-0" />
            <span className="truncate">{company.split(' - ')[0]}</span>
          </div>

          {/* Contact Row */}
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
            <User className="size-3 shrink-0" />
            <div className="flex items-center gap-1.5">
              {contactAvatar && (
                <div className="size-4 rounded-full bg-muted flex items-center justify-center text-[8px] font-medium">
                  {contactAvatar}
                </div>
              )}
              <span className="truncate">{contact}</span>
            </div>
          </div>

          {/* Value Row */}
          <div className="flex items-center gap-2 text-[11px]">
            <Globe className="size-3 text-muted-foreground shrink-0" />
            <span className="font-semibold">{value}</span>
          </div>

          {/* Employees Row */}
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
            <Hash className="size-3 shrink-0" />
            <span>{employees}</span>
          </div>

          {/* Plan Badge Row */}
          <div className="flex items-center gap-2 text-[11px]">
            <FileText className="size-3 text-muted-foreground shrink-0" />
            <Badge
              variant="outline"
              className="text-[10px] px-1.5 py-0 h-5 font-medium border-0 bg-muted text-foreground"
            >
              {plan}
            </Badge>
          </div>

          {/* Date Row */}
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
            <Calendar className="size-3 shrink-0" />
            <span>{date}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-1.5 border-t text-[10px] text-muted-foreground">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center gap-1">
              <FileText className="size-3" />
              {files}
            </span>
            <span className="flex items-center gap-1">
              <MessageSquare className="size-3" />
              {comments}
            </span>
          </div>
          {days && (
            <span className="flex items-center gap-1">
              <Clock className="size-3" />
              {days}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// Kanban Column for Pipeline
function KanbanPipelineColumn({
  name,
  count,
  deals,
  total,
}: {
  name: string;
  count: number;
  deals: Array<{
    id: string;
    company: string;
    logo: string;
    contact: string;
    contactAvatar?: string;
    value: string;
    employees: number;
    plan: string;
    date: string;
    files: number;
    comments: number;
    days?: string;
  }>;
  total: string;
}) {
  return (
    <div className="flex flex-col min-w-[240px] flex-1 rounded-lg bg-muted/20 border border-border/50">
      {/* Column Header */}
      <div className="flex items-center gap-2 p-3 border-b border-border/50">
        <span className="size-2.5 rounded-full bg-foreground" />
        <span className="font-medium text-sm">{name}</span>
        <span className="text-muted-foreground text-sm">{count}</span>
        <div className="ml-auto flex items-center gap-1">
          <Button variant="ghost" size="icon" className="size-6">
            <MoreVertical className="size-3.5" />
          </Button>
          <Button variant="ghost" size="icon" className="size-6">
            <Plus className="size-3.5" />
          </Button>
        </div>
      </div>

      {/* Cards Container with scroll and bottom shade */}
      <div className="relative flex-1 min-h-0">
        <div className="absolute inset-0 overflow-y-auto scrollbar-hide p-2">
          <div className="pb-8">
            {deals.map((deal, i) => (
              <motion.div
                key={deal.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group"
              >
                <KanbanDealCard {...deal} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Shade Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-muted/40 via-muted/20 to-transparent pointer-events-none rounded-b-lg" />
      </div>

      {/* Column Footer Total */}
      <div className="p-2 px-3 text-xs text-muted-foreground border-t border-border/50 bg-muted/30 rounded-b-lg">
        <span className="font-medium">{total}</span> <span className="text-[10px]">sum</span>
      </div>
    </div>
  );
}

// Pipeline Tab - Active Agents Kanban Board
function PipelineTab() {
  const pipelineColumns = [
    {
      name: 'Draft',
      count: 12,
      total: '12 agents',
      deals: [
        {
          id: 'draft-1',
          company: 'Email Classifier',
          logo: 'E',
          contact: 'Sofia Martinez',
          contactAvatar: 'SM',
          value: '98.2% accuracy',
          employees: 31,
          plan: 'NLP',
          date: 'Jan 17, 2024',
          files: 1,
          comments: 1,
          days: '32d',
        },
        {
          id: 'draft-2',
          company: 'Lead Scorer',
          logo: 'L',
          contact: 'Emily Carter',
          contactAvatar: 'EC',
          value: '94.5% accuracy',
          employees: 45,
          plan: 'ML',
          date: 'Feb 12, 2024',
          files: 2,
          comments: 3,
          days: '15d',
        },
        {
          id: 'draft-3',
          company: 'Doc Summarizer',
          logo: 'D',
          contact: 'Alex Chen',
          contactAvatar: 'AC',
          value: '96.8% accuracy',
          employees: 28,
          plan: 'LLM',
          date: 'Mar 05, 2024',
          files: 1,
          comments: 2,
          days: '8d',
        },
      ],
    },
    {
      name: 'Testing',
      count: 8,
      total: '8 agents',
      deals: [
        {
          id: 'testing-1',
          company: 'Support Router',
          logo: 'S',
          contact: 'Ethan Blake',
          contactAvatar: 'EB',
          value: '99.1% accuracy',
          employees: 20,
          plan: 'ML',
          date: 'Dec 21, 2024',
          files: 8,
          comments: 2,
          days: '0d',
        },
        {
          id: 'testing-2',
          company: 'Invoice Parser',
          logo: 'I',
          contact: 'Emily Carter',
          contactAvatar: 'EC',
          value: '97.3% accuracy',
          employees: 52,
          plan: 'OCR',
          date: 'Jan 05, 2025',
          files: 3,
          comments: 5,
          days: '8d',
        },
      ],
    },
    {
      name: 'Staging',
      count: 5,
      total: '5 agents',
      deals: [
        {
          id: 'staging-1',
          company: 'Sentiment Analyzer',
          logo: 'S',
          contact: 'Lucas Weber',
          contactAvatar: 'LW',
          value: '95.6% accuracy',
          employees: 86,
          plan: 'NLP',
          date: 'Jan 17, 2025',
          files: 0,
          comments: 6,
          days: '14d',
        },
        {
          id: 'staging-2',
          company: 'Data Enricher',
          logo: 'D',
          contact: 'Mike Fischer',
          contactAvatar: 'MF',
          value: '99.4% accuracy',
          employees: 34,
          plan: 'API',
          date: 'Feb 02, 2025',
          files: 4,
          comments: 2,
          days: '5d',
        },
      ],
    },
    {
      name: 'Production',
      count: 24,
      total: '24 agents',
      deals: [
        {
          id: 'prod-1',
          company: 'Ticket Classifier',
          logo: 'T',
          contact: 'Mike Fischer',
          contactAvatar: 'MF',
          value: '99.8% accuracy',
          employees: 33,
          plan: 'ML',
          date: 'Oct 26, 2024',
          files: 1,
          comments: 1,
        },
        {
          id: 'prod-2',
          company: 'Meeting Scheduler',
          logo: 'M',
          contact: 'Ethan Blake',
          contactAvatar: 'EB',
          value: '100% uptime',
          employees: 28,
          plan: 'Workflow',
          date: 'Nov 15, 2024',
          files: 2,
          comments: 4,
          days: '21d',
        },
      ],
    },
    {
      name: 'Archived',
      count: 6,
      total: '6 agents',
      deals: [
        {
          id: 'arch-1',
          company: 'Legacy Chatbot v1',
          logo: 'L',
          contact: 'Sarah Chen',
          contactAvatar: 'SC',
          value: 'Deprecated',
          employees: 120,
          plan: 'Legacy',
          date: 'Jan 28, 2025',
          files: 5,
          comments: 8,
          days: '3d',
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col h-full gap-3 overflow-hidden">
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-2 text-xs">
            <Kanban className="size-3.5" />
            Agent Status
            <ChevronDown className="size-3" />
          </Button>
          <Badge variant="outline" className="gap-1.5 h-7 bg-muted text-foreground border-border">
            <TrendingUp className="size-3" />
            55 total agents
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-2 text-xs">
            <Filter className="size-3.5" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-2 text-xs">
            <Settings className="size-3.5" />
            <span className="hidden sm:inline">Customize</span>
          </Button>
          <Button size="sm" className="h-8 gap-2 text-xs">
            <Plus className="size-3.5" />
            New Agent
          </Button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 shrink-0">
        <Button variant="outline" size="sm" className="h-7 gap-1.5 text-xs">
          <Filter className="size-3" />
          Sorted by Last updated
        </Button>
        <Button variant="outline" size="sm" className="h-7 gap-1.5 text-xs">
          Owner
          <ChevronDown className="size-3" />
        </Button>
        <Button variant="outline" size="sm" className="h-7 gap-1.5 text-xs">
          Type
          <ChevronDown className="size-3" />
        </Button>
        <div className="h-4 w-px bg-border" />
        <Badge variant="outline" className="gap-1 h-6 text-xs border-border bg-muted text-foreground">
          <span className="size-1.5 rounded-full bg-foreground" />
          Active agents only
        </Badge>
      </div>

      {/* Kanban Board */}
      <div className="flex-1 min-h-0 flex gap-3 overflow-x-auto scrollbar-hide pb-2">
        {pipelineColumns.map((column) => (
          <KanbanPipelineColumn key={column.name} {...column} />
        ))}
      </div>
    </div>
  );
}

// Top Header Bar Component (stays constant)
const teamAvatars = [
  { src: 'https://github.com/shadcn.png', alt: 'Team member 1' },
  { src: 'https://github.com/leerob.png', alt: 'Team member 2' },
  { src: 'https://github.com/haydenbleasel.png', alt: 'Team member 3' },
];

function TopBar() {
  return (
    <div className="flex items-center justify-between px-4 py-2.5 border-b bg-card/80 shrink-0">
      <div className="flex items-center gap-3">
        <h1 className="font-semibold text-sm">Agent Dashboard</h1>
      </div>
      <div className="flex items-center gap-2">
        {/* User Avatars */}
        <div className="flex -space-x-2">
          {teamAvatars.map((avatar, i) => (
            <img
              key={i}
              src={avatar.src}
              alt={avatar.alt}
              className="size-7 rounded-full border-2 border-background object-cover"
            />
          ))}
          <div className="size-7 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-medium text-muted-foreground">
            +1
          </div>
        </div>
        <Button variant="ghost" size="icon" className="size-7">
          <MessageSquare className="size-4" />
        </Button>
      </div>
    </div>
  );
}

// Tabs Bar Component (stays constant, controls content)
const TABS = [
  { id: 'data', label: 'Integrations', icon: Database },
  { id: 'workflows', label: 'Workflows', icon: GitBranch },
  { id: 'reporting', label: 'Analytics', icon: FileBarChart },
  { id: 'pipeline', label: 'Agents', icon: Kanban },
];

const AUTO_ROTATE_INTERVAL = 8000; // 8 seconds per tab

function TabsBar({
  activeTab,
  onTabChange,
  progress,
}: {
  activeTab: string;
  onTabChange: (tab: string) => void;
  progress: number;
}) {
  return (
    <div className="flex items-center border-b bg-card/50 px-2 shrink-0">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            'relative flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors',
            activeTab === tab.id
              ? 'border-transparent text-foreground'
              : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted'
          )}
        >
          <tab.icon className="size-4" />
          <span className="hidden sm:inline">{tab.label}</span>
          {/* Progress bar for active tab */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden">
            {activeTab === tab.id && (
              <div
                className="h-full bg-foreground transition-none"
                style={{ width: `${progress}%` }}
              />
            )}
          </div>
        </button>
      ))}
    </div>
  );
}

// Main Product Tabs Component
export function ProductTabs() {
  const [activeTab, setActiveTab] = useState('data');
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setProgress(0);
  };

  useEffect(() => {
    if (isPaused) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (100 / (AUTO_ROTATE_INTERVAL / 50));

        if (newProgress >= 100) {
          // Move to next tab when progress completes
          setActiveTab((currentTab) => {
            const currentIndex = TABS.findIndex((tab) => tab.id === currentTab);
            const nextIndex = (currentIndex + 1) % TABS.length;
            return TABS[nextIndex]?.id ?? 'data';
          });
          return 0;
        }

        return newProgress;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [isPaused]);

  return (
    <Section className="flex flex-col py-0 sm:py-0">
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div
        className="relative mx-auto w-full rounded-xl border bg-card/50 backdrop-blur-sm overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Full overlay to prevent all user interaction */}
        <div className="absolute inset-0 z-50 cursor-default" />

        <div className="flex h-[550px] sm:h-[600px] lg:h-[650px]">
          {/* Sidebar - stays constant */}
          <Sidebar activeTab={activeTab} onTabChange={handleTabClick} />

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Top Bar - stays constant */}
            <TopBar />

            {/* Tabs Bar - stays constant */}
            <TabsBar activeTab={activeTab} onTabChange={handleTabClick} progress={progress} />

            {/* Content Area - changes based on active tab */}
            <div className="relative flex-1 p-3 sm:p-4 overflow-hidden bg-background/50">
              {activeTab === 'data' && <DataTab />}
              {activeTab === 'workflows' && <WorkflowsTab />}
              {activeTab === 'reporting' && <ReportingTab />}
              {activeTab === 'pipeline' && <PipelineTab />}

              {/* Bottom fade gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none z-20" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
