/** IDs map to `booking.staff.*` in messages. */
export const staffBookingIds = ["any", "s1", "s2", "s3"] as const;
export type StaffBookingId = (typeof staffBookingIds)[number];
