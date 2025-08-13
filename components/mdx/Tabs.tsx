'use client'

import { Tab } from '@headlessui/react'
import React from 'react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function Tabs({
  labels,
  children,
  group,
}: {
  labels: string[]
  children: React.ReactNode[]
  group?: string // optional: isolate multiple tab sets
}) {
  return (
    <Tab.Group manual as="div" className="my-6" data-tabs-group={group}>
      <Tab.List className="flex gap-2 border-b border-gray-200 dark:border-gray-700">
        {labels.map((label, idx) => (
          <Tab
            key={idx}
            className={({ selected }) =>
              classNames(
                'rounded-t-lg px-3 py-2 text-sm font-medium outline-none',
                selected
                  ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
              )
            }
          >
            {label}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="rounded-b-lg">
        {children.map((child, idx) => (
          <Tab.Panel key={idx} className="focus:outline-none">
            {child}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

export function TabPanel({ children }: { children: React.ReactNode }) {
  return <div className="mt-3">{children}</div>
}
