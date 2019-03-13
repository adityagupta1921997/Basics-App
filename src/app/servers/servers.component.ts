import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer=false
  serverCreationStatus="No server was created"
  serverName=''
  serverCreated=false
  servers=['Test Server','Test Server 2']

  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true
    },2000)
   }

  ngOnInit() {
  }

  onServerCreation()
  {
    this.servers.push(this.serverName)
    this.serverCreated=true
    return this.serverCreationStatus="Server is created with name "+ this.serverName
  }

  onUpdateServerName(event:Event)
  {
    return this.serverName=(<HTMLInputElement>event.target).value
  }

}
