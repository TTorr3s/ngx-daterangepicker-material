import { InjectionToken } from '@angular/core';
import * as _dayjs from 'dayjs';
const dayjs = _dayjs;
import * as localeData from 'dayjs/plugin/localeData';
import * as utc from 'dayjs/plugin/utc';
import * as timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/es'

dayjs.extend(localeData);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('es');
dayjs.tz.setDefault("America/Mexico_City");


export const LOCALE_CONFIG = new InjectionToken<LocaleConfig>('daterangepicker.config');
/**
 *  LocaleConfig Interface
 */
export interface LocaleConfig {
  direction?: string;
  separator?: string;
  weekLabel?: string;
  applyLabel?: string;
  cancelLabel?: string;
  clearLabel?: string;
  customRangeLabel?: string;
  daysOfWeek?: string[];
  monthNames?: string[];
  firstDay?: number;
  format?: string;
  displayFormat?: string;
}
/**
 *  DefaultLocaleConfig
 */
export const DefaultLocaleConfig: LocaleConfig = {
  direction: 'ltr',
  separator: ' - ',
  weekLabel: 'W',
  applyLabel: 'Apply',
  cancelLabel: 'Cancel',
  clearLabel: 'Clear',
  customRangeLabel: 'Custom range',
  daysOfWeek: dayjs.weekdaysMin(),
  monthNames: dayjs.months(),
  firstDay: dayjs.localeData().firstDayOfWeek(),
};
