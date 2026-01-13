'use client'
import { Button } from '@/components/ui/button'
import { Ghost, Loader2Icon, Plus } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { DialogClose } from '@radix-ui/react-dialog'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import {v4 as uuidv4} from 'uuid'
import { createAgent } from '@/convex/agent'
import { UserDetailContext } from '@/context/UserDetailContext';

function CreateAgentSection() {

  const route = useRouter()
  const [openDialog, setOpenDialog] = useState(false)
  const CreateAgentMutation = useMutation(api.agent.createAgent)
  const [agentName, setAgentName] = useState<string>()
  const [loader, setLoader] = useState(false)
  const {userDetail, setUserDetail} = useContext(UserDetailContext)

  const CreateAgent = async () => {
    setLoader(true)
    const agentId = uuidv4()
    const result = await CreateAgentMutation({
      agentId: agentId,
      name: agentName??"",
      userId: userDetail?._id
    })
    console.log(result)
    setLoader(false)
    setOpenDialog(false)
    route.push('/agent/'+agentId)
  }

  return (
    <div className='space-y-3 flex flex-col justify-center items-center mt-20' >
      <h2 className='font-bold text-2xl' >Create Ai Agent Workflow</h2>
      <p className='text-lg'>Build an ai agent workflow with logic and tools</p>
      <Dialog>
        <DialogTrigger asChild>
          <Button size={'lg'} onClick={() => setOpenDialog(true) } >
            <Plus /> Create
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter Agent name</DialogTitle>
            <DialogDescription>
              <Input placeholder='Agent name' onChange={(e) => setAgentName(e.target.value) } />
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose>
              <Button variant={'ghost'} >Cancel</Button>
            </DialogClose>
            <Button onClick={CreateAgent} disabled={loader} >
              {loader&&<Loader2Icon className='animate-spin' />}
              Create</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default CreateAgentSection
