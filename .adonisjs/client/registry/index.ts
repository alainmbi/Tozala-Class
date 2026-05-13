/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'home': {
    methods: ["GET","HEAD"],
    pattern: '/',
    tokens: [{"old":"/","type":0,"val":"/","end":""}],
    types: placeholder as Registry['home']['types'],
  },
  'shop': {
    methods: ["GET","HEAD"],
    pattern: '/shop',
    tokens: [{"old":"/shop","type":0,"val":"shop","end":""}],
    types: placeholder as Registry['shop']['types'],
  },
  'services': {
    methods: ["GET","HEAD"],
    pattern: '/services',
    tokens: [{"old":"/services","type":0,"val":"services","end":""}],
    types: placeholder as Registry['services']['types'],
  },
  'service.booking': {
    methods: ["GET","HEAD"],
    pattern: '/services/reservation',
    tokens: [{"old":"/services/reservation","type":0,"val":"services","end":""},{"old":"/services/reservation","type":0,"val":"reservation","end":""}],
    types: placeholder as Registry['service.booking']['types'],
  },
  'event': {
    methods: ["GET","HEAD"],
    pattern: '/event',
    tokens: [{"old":"/event","type":0,"val":"event","end":""}],
    types: placeholder as Registry['event']['types'],
  },
  'checkout': {
    methods: ["GET","HEAD"],
    pattern: '/checkout',
    tokens: [{"old":"/checkout","type":0,"val":"checkout","end":""}],
    types: placeholder as Registry['checkout']['types'],
  },
  'product.show': {
    methods: ["GET","HEAD"],
    pattern: '/product/:id',
    tokens: [{"old":"/product/:id","type":0,"val":"product","end":""},{"old":"/product/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['product.show']['types'],
  },
  'new_account.create': {
    methods: ["GET","HEAD"],
    pattern: '/signup',
    tokens: [{"old":"/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['new_account.create']['types'],
  },
  'new_account.store': {
    methods: ["POST"],
    pattern: '/signup',
    tokens: [{"old":"/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['new_account.store']['types'],
  },
  'session.create': {
    methods: ["GET","HEAD"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['session.create']['types'],
  },
  'session.store': {
    methods: ["POST"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['session.store']['types'],
  },
  'session.destroy': {
    methods: ["POST"],
    pattern: '/logout',
    tokens: [{"old":"/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['session.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
