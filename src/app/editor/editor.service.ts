import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class EditorService {
    onKeyDown = new EventEmitter<KeyboardEvent>();
}
