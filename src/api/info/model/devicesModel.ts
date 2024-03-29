import { DevicePowerTypes } from '/@/enums/powerCutEnum';
import { EmployeeResultModel } from '/@/api/sys/model/userModel';

/** 设备查询接口请求数据 */
export interface GetDevicesListParam {
  /** 是否正序 */
  ascending?: boolean;
  /** 设别标识符集合 */
  category?: string[];
  /** 设别ID集合 */
  deviceIds?: string[];
  /** 停送电设备带电类型集合 */
  devicePowerTypes?: DevicePowerTypes[];
  /** 设备种类列表 */
  deviceTypeList?: string[];
  /** 模糊查询条件,传processNO,code,name,model,standard拼接的字符串 */
  globalCondition?: string;
  /** 全局搜索 */
  globalName?: string;
  /** 是否返回子集 default:true */
  hasChildFlag?: boolean;
  /** 迭代层级数，全集为0 */
  hierarchy?: number;
  /** 是否为主设备，1主设备，0附属设备，不传或传空为两者全要 */
  isPrimary?: boolean;
  /** 是否按照设备类型分类返回一棵假树 */
  isTreeForDeviceCategory?: boolean;
  /** 是否按工艺系统分类返回一棵假树 */
  isTreeForProcessId?: boolean;
  /** 位置标识符列表 */
  location?: string[];
  /** 排序的字段名 */
  orderBy?: string;
  /** 权限组织id集合 */
  organizationIds?: number[];
  /** 当前页码 */
  pageNo?: number;
  /** 一页多少条记录 0表示不分页全部显示 */
  pageSize?: number;
  /** 所属父级设备标识符，为-1或者小于-1或者空时，为查询主设备 */
  parentId?: number;
  /** 工艺系统标识集合 */
  processIds?: number[];
  /** 关联设备对应主设备ID */
  relativeDeviceMainId?: number;
  /** 搜索关联设备-默认为false，在下拉搜索框查询中用到 */
  searchRelative?: boolean;
  /** 是否查询关联设备-默认为false，更多查询用到 */
  searchRelativeDeviceFlag?: boolean;
  /** 是否搜索所有带电设备(true:搜索所有DevicePowerType为高压或者低压的设备；其他情况搜索所有) */
  searchWithDevicePowerType?: boolean;
  /** 设备状态集合 */
  status?: string[];
}

/** 设备查询接口返回数据 */
export interface GetDevicesListResultModel {
  items: DeviceModel[];
}

export interface DeviceModel {
  /** 更新的附属设备标识组 */
  ancillaryDevices: Nullable<DeviceBaseModel[]>;
  /** 附属设备数量 */
  appurtenanceCount: 0;
  /** 更新的摄像头标识组 */
  cameras: Nullable<DeviceCameraModel[]>;
  /** 设备编码 */
  categoryCode: string;
  /** 备类型图标 */
  categoryIcon: Nullable<string>;
  /** 设备标识符 */
  categoryId: number;
  /** 设备类型名称 */
  categoryName: string;
  /** 按照设备类型创造假树的标识符–仅查询假树时有效 */
  categoryTreeId: string;
  /** 按照设备类型创造假树的父节点标识符–仅查询假树时有效 */
  categoryTreeParentId: string;
  /** 设备编号 */
  code: string;
  /** 创建时间 */
  createTime: Nullable<number>;
  /** 创建的账户标识 */
  createUserId: number;
  /** 设备种类 */
  deviceType: string;
  /** 更新的承包员工标识组 */
  employees: Nullable<EmployeeResultModel[]>;
  /** 全父级id */
  fullParentIds: string;
  /** 设备id */
  id: number;
  /** 设备类型 */
  isPrimary: boolean;
  /** 位置编码 */
  locationCode: string;
  /** 位置全名 */
  locationFullName: string;
  /** 位置id */
  locationId: number;
  /** 当前位置名称 */
  locationName: string;
  /** 置父级的路径 */
  locationParentName: string;
  /** 主设备organizationId */
  mainDeviceOrganizationId: number;
  /** 制造商id */
  manufacturerId: number;
  /** 制造商名称 */
  manufacturerName: string;
  /** 出厂时间 */
  manufacturingDate: number;
  /** 出厂编号 */
  manufacturingNo: string;
  /** 制造产地 */
  manufacturingPlace: string;
  /** 是否是检索匹配的数据记录 1：匹配 */
  matched: number;
  /** 备注 */
  memo: string;
  /** 型号 */
  model: string;
  /** 设备名称 */
  name: string;
  /** 组织全名 */
  organizationFullName: string;
  /**  组织id */
  organizationId: number;
  /** 所属设备标识符 */
  parentId: -1;
  /** 所属设备名称 */
  parentName: string;
  /** 照片列表 */
  photoList: Nullable<
    {
      deviceId: number;
      order: number;
      photo: string;
    }[]
  >;
  /** 更新的停送电相关标识组 */
  powerCutRelativeDevices: DeviceBaseModel[];
  /** 设备带电类型 */
  powerType: string;
  /** 主设备名称 */
  primaryName: string;
  /** 设备工艺id */
  processId: number;
  /** 设备工艺名称 */
  processName: string;
  /** 设备工艺号 */
  processNo: string;
  /** 工艺类型设备假树标识-查询工艺系统设备假树 */
  processTreeId: string;
  /** 工艺类型设备父节点假树标识-查询工艺系统设备假树 */
  processTreeParentId: string;
  /** 购买日期 */
  purchaseDate: number;
  /** 购买价格 */
  purchasePrice: number;
  qrcod: string;
  /** 使用年限 */
  serviceLife: number;
  /** 安装日期 */
  setupDate: number;
  /** 规格全称（平铺） */
  specDataFullName: string;
  /** 型号 */
  specDataList: Nullable<DeviceSpecDataModel[]>;
  /** 设备状态 */
  status: string;
  /** 更新时间 */
  updateTime: number;
  /** 更新的账户标识 */
  updateUserId: number;
  /** 供应商id */
  vendorId: number;
  /** 供应商名称 */
  vendorName: string;
  /** 版本控制 */
  versionTag: string;
}

export interface DeviceBaseModel {
  code: string;
  createTime: number;
  createUserId: number;
  deviceCategoryIcon: string;
  deviceCategoryId: number;
  distributionCabinetCameraCode: string;
  distributionCabinetCameraId: number;
  distributionCabinetCode: string;
  distributionCabinetId: number;
  distributionRoomCode: string;
  distributionRoomId: number;
  id: number;
  isPrimary: boolean;
  locationId: number;
  manufacturerId: number;
  manufacturingDate: number;
  manufacturingPlace: string;
  memo: string;
  model: string;
  name: string;
  organizationId: number;
  parentId: number;
  parentOrgIds: string;
  parentPathName: string;
  processId: number;
  processName: string;
  processNo: string;
  purchaseDate: number;
  purchasePrice: number;
  qrcode: string;
  setupDate: number;
  status: string;
  updateTime: number;
  updateUserId: number;
  vendorId: number;
  versionTag: string;
}

export interface DeviceCameraModel {
  id: number;
  location: string;
  name: string;
}

export interface DeviceSpecDataModel {
  deviceId: number;
  extraDisplayMode: boolean;
  name: string;
  specDataId: number;
  unit: string;
  value: string;
}
