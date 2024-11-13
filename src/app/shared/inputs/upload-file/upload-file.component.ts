import { Component, OnInit } from '@angular/core'; 
import { MessageService } from 'primeng/api';
 
@Component({ 
  selector: 'app-upload-file', 
  templateUrl: './upload-file.component.html', 
  styleUrls: ['./upload-file.component.css'],
  // providers: [MessageService] 
}) 
export class UploadFileComponent implements OnInit{ 
  
  ngOnInit(): void { 
    // this.combinedFiles = this.imageFiles.concat(this.videoFiles); 
  } 
  // combinedFiles: any[] = []; 
  imageFiles: FilePreview[] = []; 
  otherFiles: FilePreview[] = []; 
  videoFiles:FilePreview[] = []; 
   
//  constructor(public messageService: MessageService) {} 
  get imageNo(): number { 
    return this.imageFiles.length; 
  } 
 
  get fileNo(): number { 
    return this.otherFiles.length; 
  } 
  get videoNo(): number { 
    return this.videoFiles.length; 
  } 
 
  onFileSelected(event: any): void { 
    const files: FileList = event.target.files; 
 
    if (files) { 
      for (let i = 0; i < files.length; i++) { 
        const file = files[i]; 
        const reader = new FileReader(); 
 
        reader.onload = (e: any) => { 
          const url = e.target.result; 
          const fileExtension = this.getFileExtension(file.name);

          console.log("File extension:", fileExtension);
          
          if (['jpg', 'png', 'svg', 'jpeg', 'avif', 'gif', 'jfif', 'pjpeg', 'pjp','apng', 'webp', 'bmp', 'ico', 'cur', 'tif', 'tiff', 'apng', 'jpe', 'xbm', 
          'webm', 'mkv','flv','vob','ogv','ogg','drc','gif','gifv','mng','avi','MTS','M2TS','TS','mov','qt','wmv','yuv','rm','rmvb','viv','asf','amv','mp4', 
          'm4p','m4v','mpg','mp2','mpeg','mpe','mpv','mpg','mpeg','m2v','m4v','svi','3gp','3g2','mxf','roq','nsv','flv','f4v','f4p','f4a','f4b'].includes(fileExtension)) { 
            if(this.fileAlreadyExists(file.name,this.imageFiles)) {
              //  this.showAlert(); 
              console.log("images exist before alert");
               alert("image are already exist");
               console.log("images exist after alert");
               
                }
            else {
              this.imageFiles.push({ name: file.name, url }); 
              console.log(this.imageFiles);
              
            }
       
          } 
       
           else { 
            const fileItem: FilePreview = { 
              name:file.name, 
              url: URL.createObjectURL(file) 
            } 
            this.otherFiles.push(fileItem); 
          } 
        }; 
      //  console.log(file.path) 
        reader.readAsDataURL(file); 
      } 
    } 
  } 
  private fileAlreadyExists(fileName: string, fileList: FilePreview[]): boolean {
    console.log("fileAlreadyExists function called");
    return fileList.some((file) => file.name === fileName);
    
  }
  showAlert(){
    // this.messageService.add({ severity: 'success', summary: 'نجاح', detail: 'تم إعادة توجيه البلاغ بنجاح' });
  }
  isImage(file: FilePreview): boolean { 
    const imageExtensions = ['jpg', 'png', 'svg', 'jpeg', 'avif', 'gif', 'jfif', 'pjpeg', 'pjp', 'apng', 'webp', 'bmp', 'ico', 'cur', 'tif', 'tiff', 'apng', 'jpe', 'xbm']; 
    return imageExtensions.includes(this.getFileExtension(file.name)); 
  } 
 
  isVideo(file: FilePreview): boolean { 
    const videoExtensions = ['webm', 'mkv', 'flv', 'vob', 'ogv', 'ogg', 'drc', 'gif', 'gifv', 'mng', 'avi', 'MTS', 'M2TS', 'TS', 'mov', 'qt', 'wmv', 'yuv', 'rm', 'rmvb', 'viv', 'asf', 'amv', 'mp4', 'm4p', 'm4v', 'mpg', 'mp2', 'mpeg', 'mpe', 'mpv', 'mpg', 'mpeg', 'm2v', 'm4v', 'svi', '3gp', '3g2', 'mxf', 'roq', 'nsv', 'flv', 'f4v', 'f4p', 'f4a', 'f4b'];
    
    return videoExtensions.includes(this.getFileExtension(file.name)); 

  } 
  
  private getFileExtension(filename: string): string { 

    return filename.split('.').pop() || ''; 
  } 
 
  previewFile(file:any) { 
   let filetype = file.name.split('.')[1]; 
  //  if(filetype == 'docs') { 
  //  } 
    window.open(file.url) 
  } 
//  videoInModal:HTMLVideoElement = document.getElementsByClassName("videoInModal")[0] as HTMLVideoElement; 
//  videoOutModal:HTMLVideoElement = document.getElementsByClassName("videoOutModal")[0] as HTMLVideoElement;
  expandImg(index:number){ 
   const modal:HTMLElement = document.getElementsByClassName('popup-image')[index] as HTMLElement; 
   const videoInModal:HTMLVideoElement = document.getElementsByClassName("videoInModal")[index] as HTMLVideoElement; 
   const videoOutModal:HTMLVideoElement = document.getElementsByClassName("videoOutModal")[index] as HTMLVideoElement;
   modal.style.display='block'; 
  //  this.video?[index].play();
  console.log(videoInModal);
  videoOutModal.pause()
  videoInModal.play(); 
  } 
  closePopup(index:number): void { 
    const popupImage: HTMLElement = document.getElementsByClassName('popup-image')[index] as HTMLElement; 
    const videoInModal:HTMLVideoElement = document.getElementsByClassName("videoInModal")[index] as HTMLVideoElement; 
    const videoOutModal:HTMLVideoElement = document.getElementsByClassName("videoOutModal")[index] as HTMLVideoElement;
    popupImage.style.display = 'none'; 
    // this.video[index].pause(); 
    console.log(videoInModal);
    videoOutModal.pause();
    videoInModal.pause();
    // this.video[index].currentTime = 0; 
  } 
  deleteImg(file:FilePreview) { 
     // Find the index of the file in the imageFiles array 
  const index = this.imageFiles.findIndex(f => f === file);  
  const indexFile = this.otherFiles.findIndex(f => f === file); 
 
  // if (index !== -1) { 
    if(index !== -1){ 
      this.imageFiles.splice(index, 1); 
    } 
    if(indexFile !== -1){ 
      this.otherFiles.splice(index, 1); 
    } 
  // } 
  console.log(this.imageFiles); 

  
   
  } 
} 
 
interface FilePreview {
  name: string;
  url: string;
}
