"use client";

import { X, MapPin, Monitor, ArrowRight } from "lucide-react";
import type { Course } from "@/data/courses";

interface Props {
  course: Course;
  onClose: () => void;
}

function mailtoLink(courseName: string, deliveryType: string) {
  const subject = encodeURIComponent(
    `Course Order Request — ${courseName} — ${deliveryType}`
  );
  const body = encodeURIComponent(
    `Course: ${courseName}\nDelivery Type: ${deliveryType}\n\nRequester Name: \nOrganization: \nPreferred Date: \n\nAdditional Notes:\n`
  );
  return `mailto:info@ble.training?subject=${subject}&body=${body}`;
}

export default function CourseModal({ course, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-lg bg-white shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-200 bg-white p-6">
          <div>
            <span className="inline-block rounded-full bg-crimson/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-crimson">
              {course.category}
            </span>
            <h2 className="mt-2 font-serif text-2xl md:text-3xl text-black leading-tight">
              {course.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 rounded-full p-2 text-black/40 hover:bg-slate-100 hover:text-black transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Overview */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-black/50 mb-2">
              Course Overview
            </h3>
            <p className="text-black/80 leading-relaxed">{course.overview}</p>
          </div>

          {/* Objectives */}
          {course.objectives.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-black/50 mb-3">
                Learning Objectives
              </h3>
              <ul className="space-y-2">
                {course.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-black/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Order buttons */}
        <div className="sticky bottom-0 border-t border-slate-200 bg-slate-50 p-6">
          <p className="text-xs text-black/50 mb-3 uppercase tracking-wider font-bold">
            Request this course
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={mailtoLink(course.title, "Onsite Delivery")}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-crimson px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
            >
              <MapPin className="h-4 w-4" />
              Request Onsite Delivery
            </a>
            <a
              href={mailtoLink(course.title, "Web-Based Training")}
              className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-black bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-black hover:bg-crimson hover:text-white hover:border-crimson transition-colors"
            >
              <Monitor className="h-4 w-4" />
              Request Web-Based Training
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
