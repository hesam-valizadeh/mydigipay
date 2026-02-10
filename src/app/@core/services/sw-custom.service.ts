import { inject, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({ providedIn: 'root' })
export class SwUpdateService {
  private readonly updates = inject(SwUpdate);

  public constructor() {
    if (this.updates.isEnabled) {
      this.updates.versionUpdates.subscribe((evt) => {
        if (evt.type === 'VERSION_READY') {
          const update = confirm('نسخه جدید در دسترس است. بارگذاری شود؟');
          if (update) location.reload();
        }
      });
    }
  }

}
