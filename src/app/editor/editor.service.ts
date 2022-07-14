import { EventEmitter, Injectable } from '@angular/core'

@Injectable()
export class EditorService {
    onKeyPress = new EventEmitter<KeyboardEvent>()
    onKeyDown = new EventEmitter<KeyboardEvent>()
}
