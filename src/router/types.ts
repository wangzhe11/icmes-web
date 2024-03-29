import type { RouteRecordRaw, RouteMeta } from 'vue-router';
import { RoleEnum } from '/@/enums/roleEnum';
import { defineComponent } from 'vue';

export type Component<T extends any = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>);

// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string;
  meta: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  props?: Recordable;
  fullPath?: string;
}

export interface MenuTag {
  type?: 'primary' | 'error' | 'warn' | 'success';
  content?: string;
  dot?: boolean;
}

export interface Menu {
  name: string;

  icon?: string;

  path: string;

  // path contains param, auto assignment.
  paramPath?: string;

  disabled?: boolean;

  children?: Menu[];

  orderNo?: number;

  roles?: RoleEnum[];

  meta?: Partial<RouteMeta>;

  tag?: MenuTag;

  hideMenu?: boolean;
}

export interface MenuModule {
  orderNo?: number;
  menu: Menu;
}

// export type AppRouteModule = RouteModule | AppRouteRecordRaw;
export type AppRouteModule = AppRouteRecordRaw;

export interface BackModeRouteRecordRaw {
  path: string;
  name: string;
  component: string | (() => Promise<unknown>) | 'LAYOUT' | 'IFRAME';
  redirect?: string;
  meta: {
    // 路由对应后端权限码
    code: number | string;
    // 路由title  一般必填
    title: string;
    // 是否忽略权限，只在权限模式为Role的时候有效
    ignoreAuth?: boolean;
    // 可以访问的角色，只在权限模式为Role的时候有效
    roles?: RoleEnum[];
    // 是否忽略KeepAlive缓存
    ignoreKeepAlive?: boolean;
    // 是否固定标签
    affix?: boolean;
    // 图标，也是菜单图标
    icon?: string;
    // 内嵌iframe的地址
    frameSrc?: string;
    // 指定该路由切换的动画名
    transitionName?: string;
    // 隐藏该路由在面包屑上面的显示
    hideBreadcrumb?: boolean;
    // 如果该路由会携带参数，且需要在tab页上面显示。则需要设置为true
    carryParam?: boolean;
    // 隐藏所有子菜单
    hideChildrenInMenu?: boolean;
    // 当前激活的菜单。用于配置详情页时左侧激活的菜单路径
    currentActiveMenu?: string;
    // 当前路由不再标签页显示
    hideTab?: boolean;
    // 当前路由不再菜单显示
    hideMenu?: boolean;
    // 菜单排序，只对第一级有效
    orderNo?: number;
    // 忽略路由。用于在ROUTE_MAPPING以及BACK权限模式下，生成对应的菜单而忽略路由。2.5.3以上版本有效
    ignoreRoute?: boolean;
    // 是否在子级菜单的完整path中忽略本级path。2.5.3以上版本有效
    hidePathForChildren?: boolean;
    single?: boolean;
  };
  children?: BackModeRouteRecordRaw[];
}
