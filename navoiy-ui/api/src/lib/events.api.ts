import { EventDTO, Schedule } from '@navoiy-workspace/types';
import { adminApi } from './api';

export const postSchedules = async (
  eventId: EventDTO['eventId']
): Promise<Schedule[]> => {
  // TODO: temporary solution
  const payload = [
    {
      type: 'AD_HOC',
      eventDateTime: '2026-02-05T12:00:00Z',
      buyLink: 'https://',
    },
  ];

  const response = await adminApi.post<Schedule[]>(
    `/events/${eventId}/schedules`,
    payload
  );
  return response.data;
};

export const putSchedules = async (
  eventId: EventDTO['eventId'],
  payload: Schedule[]
): Promise<Schedule[]> => {
  const response = await adminApi.put<Schedule[]>(
    `/events/${eventId}/schedules`,
    payload
  );
  return response.data;
};

export const deleteSchedule = async (
  eventId: EventDTO['eventId'],
  scheduleId: Schedule['scheduleId']
): Promise<EventDTO[]> => {
  const response = await adminApi.delete<EventDTO[]>(
    `/events/${eventId}/schedules/${scheduleId}`
  );
  return response.data;
};
