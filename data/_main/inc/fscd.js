
function ScreenShot(ShotX, ShotY, source){

   var ChildX, ChildY;
   var resizability = "no";
   var scrollable = "no";
   var ScreenX = screen.availWidth;
   var ScreenY = screen.availHeight;
   var buffer = 16;

   if ((ShotX + buffer) >= ScreenX){
      ChildX = ScreenX - 100;
      resizability = "yes";
      scrollable = "yes";
   } else { ChildX = ShotX + buffer;  }

   if ((ShotY + buffer) >= ScreenY){
      ChildY = ScreenY - 100;
      resizability = "yes";
      scrollable = "yes";
   } else { ChildY = ShotY + buffer; }

	 features = "resizable="+resizability;
   features += ",scrollbars="+scrollable;
   features += ",width="+ChildX;
   features += ",height="+ChildY;

   source_line = '<img border="0" alt="Close window" src="'+source+'" /></a></div>';

   screen_window = window.open("", "Screen Capture Image", features);
   screen_window.document.write("<html><head><title>Screen Capture Image</title>");
   screen_window.document.write("<style>body{text-align:center}</style></head>");
   screen_window.document.write("<body bgcolor='white' onblur=window.close()>");
   screen_window.document.write('<div style="display:block" class="screen_block">');
   screen_window.document.write('<div class="thumb_frame"><a href="javascript:window.close();">');
   screen_window.document.write(source_line);
   screen_window.document.write("</div></body></html>");
}
